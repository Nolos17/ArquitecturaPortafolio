import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { optimizar, limpiar } from "./optSlice";

const OptForm = () => {
  const dispatch = useDispatch();
  const { loading, resultado, error } = useSelector(
    (state) => state.optimizador
  );

  const [capacidad, setCapacidad] = useState("");
  const [objetos, setObjetos] = useState([
    { nombre: "", peso: "", ganancia: "" },
  ]);

  const handleChangeObjeto = (index, field, value) => {
    const nuevos = [...objetos];
    nuevos[index][field] = value;
    setObjetos(nuevos);
  };

  const agregarObjeto = () =>
    setObjetos([...objetos, { nombre: "", peso: "", ganancia: "" }]);
  const eliminarObjeto = (index) =>
    setObjetos(objetos.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      capacidad: parseInt(capacidad),
      objetos: objetos.map((o) => ({
        nombre: o.nombre,
        peso: parseInt(o.peso),
        ganancia: parseInt(o.ganancia),
      })),
    };
    dispatch(optimizar(payload));
  };

  const handleLimpiar = () => {
    setCapacidad("");
    setObjetos([{ nombre: "", peso: "", ganancia: "" }]);
    dispatch(limpiar());
  };

  return (
    <div className="container mt-4 opt-form">
      <h2 className="mb-4">Optimizador de Portafolio</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Capacidad:</label>
          <input
            type="number"
            className="form-control"
            value={capacidad}
            onChange={(e) => setCapacidad(e.target.value)}
            required
          />
        </div>

        <h3>Proyectos</h3>
        {objetos.map((obj, idx) => (
          <div key={idx} className="row mb-2 g-2 align-items-center">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={obj.nombre}
                onChange={(e) =>
                  handleChangeObjeto(idx, "nombre", e.target.value)
                }
                required
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Costo"
                value={obj.peso}
                onChange={(e) =>
                  handleChangeObjeto(idx, "peso", e.target.value)
                }
                required
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Ganancia"
                value={obj.ganancia}
                onChange={(e) =>
                  handleChangeObjeto(idx, "ganancia", e.target.value)
                }
                required
              />
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => eliminarObjeto(idx)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary mb-3"
          onClick={agregarObjeto}
        >
          Agregar Proyecto
        </button>

        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-primary me-2"
            disabled={loading}
          >
            {loading ? "Calculando..." : "Calcular"}
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleLimpiar}
          >
            Limpiar
          </button>
        </div>
      </form>

      {error && (
        <div className="alert alert-danger">{JSON.stringify(error)}</div>
      )}

      {resultado && (
        <div className="alert alert-success mt-3">
          <h4>Resultados</h4>
          <p>Seleccionados: {resultado.seleccionados.join(", ")}</p>
          <p>Ganancia total: {resultado.ganancia_total}</p>
          <p>Peso total: {resultado.peso_total}</p>
        </div>
      )}
    </div>
  );
};

export default OptForm;
