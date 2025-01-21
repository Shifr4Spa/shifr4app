import { supabase } from "@/app/lib/supabase";
import { Customer } from "@/app/types/clients";

// Obtener todos los clientes
export async function getCustomers(): Promise<Customer[]> {
  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data || [];
}

// Crear o actualizar un cliente
export async function saveCustomer(customer: Partial<Customer>) {
  if (customer.id) {
    const { error } = await supabase
      .from("clients")
      .update(customer)
      .eq("id", customer.id);

    if (error) throw new Error(error.message);
  } else {
    const { error } = await supabase.from("clients").insert(customer);

    if (error) throw new Error(error.message);
  }
}

// Eliminar un cliente
export async function deleteCustomer(id: number) {
  const { error } = await supabase.from("clients").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
