"use server";

import React from "react";

interface ReservationDetails {
  fullName: string;
  email: string;
  reservationDate: string;
  reservationHour: string;
  services: { name: string; price: number; duration: string }[];
  total: number;
  confirmationNumber: string;
}

export const EmailTemplate = ({
  reservationDetails,
}: {
  reservationDetails: ReservationDetails;
}) => {
  return (
    <div
      style={{
        backgroundColor: "#f7fafc",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Contenedor Principal */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        {/* Encabezado con Logo */}
        <div
          style={{
            backgroundColor: "#0f172a",
            padding: "24px",
            textAlign: "center",
          }}
        >
          <img
            src="https://dev.d4jfwxapfw4e1.amplifyapp.com/logologin-white.png"
            alt="SPA Logo"
            style={{
              margin: "0 auto 16px auto",
              display: "block",
              width: "190px",
            }}
          />
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#ffffff",
              margin: "0",
            }}
          >
            Confirmación de Reserva en Shifra SPA
          </h1>
        </div>

        {/* Cuerpo del Correo */}
        <div style={{ padding: "24px" }}>
          {/* Mensaje de Bienvenida */}
          <p
            style={{
              color: "#4a5568",
              fontSize: "16px",
              lineHeight: "1.5",
              marginBottom: "24px",
            }}
          >
            Gracias por reservar con nosotros, {reservationDetails.fullName}.
            Aquí están los detalles de tu reserva:
          </p>

          {/* Información del Cliente */}
          <div style={{ marginBottom: "24px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "16px",
              }}
            >
              Información del Cliente
            </h2>
            <p style={{ color: "#4a5568", fontSize: "16px", margin: "0" }}>
              <strong>Nombre:</strong> {reservationDetails.fullName}
            </p>
            <p
              style={{
                color: "#4a5568",
                fontSize: "16px",
                margin: "4px 0 0 0",
              }}
            >
              <strong>Correo Electrónico:</strong> {reservationDetails.email}
            </p>
            <p
              style={{
                color: "#4a5568",
                fontSize: "16px",
                margin: "4px 0 0 0",
              }}
            >
              <strong>Fecha de Reserva:</strong>{" "}
              {new Date(
                reservationDetails.reservationDate
              ).toLocaleDateString()}{" "}
              {reservationDetails.reservationHour}
            </p>
          </div>

          {/* Servicios Reservados */}
          <div style={{ marginBottom: "24px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "16px",
              }}
            >
              Servicios Reservados
            </h2>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {reservationDetails.services.map((service, index) => (
                <li
                  key={index}
                  style={{
                    borderBottom: "1px solid #e2e8f0",
                    paddingBottom: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: "500",
                          color: "#2d3748",
                          margin: "0",
                        }}
                      >
                        {service.name} {": "}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#718096",
                          margin: "4px 0 0 0",
                        }}
                      >
                        Duración: {service.duration}
                      </p>
                    </div>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#2d3748",
                        margin: "0",
                      }}
                    >
                      ${service.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Total Pagado */}
          <div style={{ marginBottom: "24px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "16px",
              }}
            >
              Total Pagado
            </h2>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#2d3748",
                margin: "0",
              }}
            >
              ${reservationDetails.total}
            </p>
          </div>

          {/* Número de Confirmación */}
          <div style={{ marginBottom: "24px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "16px",
              }}
            >
              Número de Confirmación
            </h2>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#4f46e5",
                backgroundColor: "#eef2ff",
                padding: "12px",
                borderRadius: "8px",
                textAlign: "center",
                margin: "0",
              }}
            >
              {reservationDetails.confirmationNumber}
            </p>
          </div>

          {/* Mensaje Final */}
          <p
            style={{
              color: "#4a5568",
              fontSize: "16px",
              lineHeight: "1.5",
              textAlign: "center",
            }}
          >
            ¡Esperamos verte pronto! Si tienes alguna pregunta, no dudes en
            contactarnos.
          </p>
        </div>

        {/* Pie de Página */}
        <div
          style={{
            backgroundColor: "#0f1628",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "14px", margin: "0" }}>
            © 2023 SPA Reservations. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};
