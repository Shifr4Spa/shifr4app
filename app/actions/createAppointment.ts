"use server";

import { supabase } from "../lib/supabase";

export async function createAppointment(appointmentData: {
  client_id: number;
  employee_id: number;
  service_id: number;
  appointment_date: string; // Formato ISO (ej: "2023-10-15T10:00:00")
  status: string;
  payment_status: string;
  payment_method: string;
  notes?: string;
  folio: string;
}) {
  const { data, error } = await supabase
    .from("appointments")
    .insert([])
    .select();

  if (error) {
    console.error("Error creating appointment:", error);
    throw new Error("Failed to create appointment");
  }

  return data;
}
