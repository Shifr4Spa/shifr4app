import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../lib/supabase";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("supabase-auth-token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  return NextResponse.next();
}
