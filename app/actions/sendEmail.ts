"use server";

import { Resend } from "resend";
import { EmailTemplate } from "../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendReservationEmail(
  email: string,
  reservationDetails: {
    fullName: string;
    email: string;
    reservationDate: string;
    reservationHour: string;
    services: { name: string; price: number; duration: string }[];
    total: number;
    confirmationNumber: string;
  }
) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // Cambia esto por tu dominio verificado en Resend
      to: [email],
      subject: "Confirmación de Reserva en SPA",
      react: EmailTemplate({ reservationDetails }),
    });

    if (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }

    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
