import { NextResponse } from "next/server";
import { createMarkdown } from "../../../lib/db";

export async function POST(request: Request) {
  const { content, title } = await request.json()

  if (!content) {
    return NextResponse.json({ error: "Content is required" }, { status: 400 })
  }

  const id = Array.from({ length: 32 }, () => Math.floor(Math.random() * 10)).join('');
  const { data, error } = await createMarkdown(id, content, title);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ id: data.id })
}

