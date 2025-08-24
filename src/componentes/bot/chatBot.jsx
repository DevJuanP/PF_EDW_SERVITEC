import React, { useState } from "react";
import { Chatbot, createChatBotMessage } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

// 1. Configuración inicial del bot
const config = {
  initialMessages: [
    createChatBotMessage("Holaaa, soy tu asistente de ServiTec.")
  ],
  botName: "Servi",
};

// 2. MessageParser
function MessageParser({ children, actions }) {
  const parse = (mensaje) => {
    if (mensaje.toLowerCase().includes("hola")) {
      actions.saludar();
    } else if (mensaje.toLowerCase().includes("asesoria")) {
      actions.asesoria();
    } else if (mensaje.toLowerCase().includes("contacto directo")) {
      actions.contacto();
    } else {
      actions.NiIdea();
    }
  };

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { parse, actions })
      )}
    </>
  );
}

// 3. ActionProvider
function ActionProvider({ createChatBotMessage, setState, children }) {
  const saludar = () => {
    const Mensaje = createChatBotMessage(
      "¡Hola! ¿Necesitas una asesoría 📘 o un contacto directo 📲?"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Mensaje],
    }));
  };

  const asesoria = () => {
    const Mensaje = createChatBotMessage(
       "Cuando quieras comprar un teléfono o una PC 💻📱, fíjate en:\n\n" +
    "👉 RAM (fluidez del equipo)\n" +
    "👉 Almacenamiento (espacio para apps y archivos)\n" +
    "👉 Procesador (velocidad y rendimiento)\n\n"+
    "si deseas te puedo compartir un [contacto directo] :)"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Mensaje],
    }));
  };

  const contacto = () => {
    const Mensaje = createChatBotMessage(
      "Aquí tengo el número de uno de los encargados 📲: 974293850"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Mensaje],
    }));
  };

  const NiIdea = () => {
    const Mensaje = createChatBotMessage("No entiendo lo que dices...");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, Mensaje],
    }));
  };

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { actions: { saludar, asesoria, contacto, NiIdea } })
      )}
    </>
  );
}

// 4. Componente principal
export default function Servi() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          zIndex: 1001
        }}
      >
        💬
      </button>

      {/* Ventana del chat */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "350px",
            maxWidth: "90%",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
}
