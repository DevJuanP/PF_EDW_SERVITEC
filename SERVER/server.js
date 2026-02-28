const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const PDFDocument = require("pdfkit");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Conexión a MySQL (XAMPP)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // XAMPP normalmente vacío
  database: "sistema_citas_pro"
});

db.connect((err) => {
  if (err) {
    console.log("Error conectando a MySQL:", err);
  } else {
    console.log("Conectado a MySQL correctamente");
  }
});


// ==========================
// CREAR CITA
// ==========================
app.post("/citas", (req, res) => {
  const {
    nombreCliente,
    dni,
    telefono,
    asesorId,
    tipoCitaId,
    fechaAtencion,
    horaAtencion
  } = req.body;

  // Verificar si cliente existe
  db.query("SELECT id FROM clientes WHERE dni = ?", [dni], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length > 0) {
      crearCita(result[0].id);
    } else {
      db.query(
        "INSERT INTO clientes (nombre, dni, telefono) VALUES (?, ?, ?)",
        [nombreCliente, dni, telefono],
        (err, resultInsert) => {
          if (err) return res.status(500).json(err);
          crearCita(resultInsert.insertId);
        }
      );
    }
  });

  function crearCita(clienteId) {
    const sql = `
      INSERT INTO citas 
      (cliente_id, asesor_id, tipo_cita_id, fecha_atencion, hora_atencion, estado)
      VALUES (?, ?, ?, ?, ?, 'Pendiente')
    `;

    db.query(
      sql,
      [clienteId, asesorId, tipoCitaId, fechaAtencion, horaAtencion],
      (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Cita creada correctamente" });
      }
    );
  }
});


// ==========================
// OBTENER CITAS
// ==========================
app.get("/citas", (req, res) => {
  const sql = `
    SELECT 
      c.id,
      cl.nombre AS cliente,
      cl.dni,
      cl.telefono,
      a.nombre AS asesor,
      t.descripcion AS tipo_cita,
      c.fecha_atencion,
      c.hora_atencion,
      c.estado
    FROM citas c
    JOIN clientes cl ON c.cliente_id = cl.id
    JOIN asesores a ON c.asesor_id = a.id
    JOIN tipos_cita t ON c.tipo_cita_id = t.id
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});


// ==========================
// EXPORTAR PDF
// ==========================
app.get("/exportar-pdf", (req, res) => {
  db.query(`
    SELECT 
      cl.nombre AS cliente,
      cl.dni,
      a.nombre AS asesor,
      t.descripcion AS tipo_cita,
      c.fecha_atencion,
      c.estado
    FROM citas c
    JOIN clientes cl ON c.cliente_id = cl.id
    JOIN asesores a ON c.asesor_id = a.id
    JOIN tipos_cita t ON c.tipo_cita_id = t.id
  `, (err, citas) => {

    if (err) return res.status(500).json(err);

    const doc = new PDFDocument({ margin: 30 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=reporte_citas.pdf");

    doc.pipe(res);

    doc.fontSize(18).text("REPORTE DE CITAS", { align: "center" });
    doc.moveDown();

    citas.forEach((cita, index) => {
      doc
        .fontSize(12)
        .text(`${index + 1}. Cliente: ${cita.cliente}`)
        .text(`DNI: ${cita.dni}`)
        .text(`Asesor: ${cita.asesor}`)
        .text(`Tipo: ${cita.tipo_cita}`)
        .text(`Fecha: ${cita.fecha_atencion}`)
        .text(`Estado: ${cita.estado}`)
        .moveDown();
    });

    doc.end();
  });
});


// ==========================
app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001");
});