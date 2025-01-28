import { NextResponse } from "next/server"
import { supabase } from "../../../../lib/supabase"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id

  const { data, error } = await supabase.from("markdowns").select("content, title").eq("id", id).single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  if (!data) {
    return NextResponse.json({ error: "Markdown not found" }, { status: 404 })
  }

  return NextResponse.json({ content: data.content, title: data.title })
}

