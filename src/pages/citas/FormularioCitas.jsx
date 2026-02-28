import React, { useState } from "react";
import "./citas.css";

  const FormularioCitas = () => {
  const [cita, setCita] = useState({
    nombreCliente: "",
    dni: "",
    telefono: "",
    asesor: "",
    tipoCita: "",
    fechaAtencion: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCita({
      ...cita,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de la cita:", cita);
    alert("Cita registrada correctamente ✅");

    setCita({
      nombreCliente: "",
      dni: "",
      telefono: "",
      asesor: "",
      tipoCita: "",
      fechaAtencion: ""
    });
  };

  return (
    <div className="contenedorcc">
      <h2 className="titulo-cc">Registro de Citas</h2>

      <form onSubmit={handleSubmit} className="formulario-cc">
        <input
          type="text"
          name="nombreCliente"
          placeholder="Nombre del Cliente"
          value={cita.nombreCliente}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="dni"
          placeholder="DNI"
          value={cita.dni}
          onChange={handleChange}
          maxLength="8"
          required
        />

        <input
          type="tel"
          name="telefono"
          placeholder="Número de Teléfono"
          value={cita.telefono}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="asesor"
          placeholder="Asesor"
          value={cita.asesor}
          onChange={handleChange}
          required
        />

        <select
          name="tipoCita"
          value={cita.tipoCita}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione tipo de cita</option>
          <option value="Presencial">Presencial</option>
          <option value="Virtual">Virtual</option>
        </select>

        <input
          type="date"
          name="fechaAtencion"
          value={cita.fechaAtencion}
          onChange={handleChange}
          required
        />

        <button type="submit">Registrar Cita</button>
      </form>
    </div>
  );

}
export default FormularioCitas;