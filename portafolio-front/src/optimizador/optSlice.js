import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { optimizarPortafolio } from "../services/api";

// Acción asincrónica para llamar a la API
export const optimizar = createAsyncThunk(
  "optimizador/optimizar",
  async (data, { rejectWithValue }) => {
    try {
      return await optimizarPortafolio(data);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const optSlice = createSlice({
  name: "optimizador",
  initialState: {
    loading: false,
    resultado: null,
    error: null,
  },
  reducers: {
    limpiar: (state) => {
      state.resultado = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(optimizar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(optimizar.fulfilled, (state, action) => {
        state.loading = false;
        state.resultado = action.payload;
      })
      .addCase(optimizar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { limpiar } = optSlice.actions;
export default optSlice.reducer;
