import { NextResponse } from "next/server"
import { supabase } from "../../../lib/supabase"
import { v4 as uuidv4 } from "uuid"

export async function POST(request: Request) {
  const { content, title } = await request.json()

  if (!content) {
    return NextResponse.json({ error: "Content is required" }, { status: 400 })
  }

  const id = uuidv4().replace(/-/g, "")

  const { data, error } = await supabase.from("markdowns").insert({ id, content, title }).select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ id: data[0].id })
}

