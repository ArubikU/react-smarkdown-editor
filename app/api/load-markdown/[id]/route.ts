import { NextResponse } from "next/server"
import { getMarkdown } from "../../../../lib/db"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id

  const { data, error } = await getMarkdown(id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  if (!data) {
    return NextResponse.json({ error: "Markdown not found" }, { status: 404 })
  }

  return NextResponse.json({ content: data.content, title: data.title })
}

