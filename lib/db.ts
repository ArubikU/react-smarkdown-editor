/* eslint-disable import/no-anonymous-default-export */
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!)

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: (text: string, params?: any[]) => sql.unsafe(text, params),
}

export async function createMarkdown(id: string, content: string, title: string) {
  try {
    // Validate inputs
    if (!id.trim() || !content.trim() || !title.trim()) {
      return { data: null, error: new Error("Invalid input") };
    }

    const existing = await sql.unsafe(
      `select * from markdowns where content = $1 and title = $2`,
      [content, title]
    );
    let response;
    if (existing && existing.length > 0) {
      response = existing;
    } else {
      response = await sql.unsafe(
      `insert into markdowns (id, content, title) values ($1, $2, $3) returning *`,
      [id, content, title]
      );
    }
    if(!response) {
      return { data: null, error: new Error("Error inserting markdown") };
    }
    const data = response[0];

    return { data, error: null };
  } catch (err) {
    return { data: null, error: err instanceof Error ? err : new Error("Unknown error") };
  }
}
export async function getMarkdown(id: string) {
  try {
    const response = await sql.unsafe(
     'SELECT * FROM markdowns WHERE id::text = $1', [String(id)]
    );
    if(!response) {
      return { data: null, error: new Error("Error fetching markdown") };
    }
    const data = response[0];

    return { data, error: null };
  } catch (err) {
    return { data: null, error: err instanceof Error ? err : new Error("Unknown error") };
  }
}
export async function getMarkdownTitle(id: string) {
  try {
    const response = await sql.unsafe(
      'SELECT title FROM markdowns WHERE id::text = $1', [String(id)]
    );
    if(!response) {
      return { data: null, error: new Error("Error fetching markdown") };
    }
    const data = response[0];

    return { data, error: null };
  } catch (err) {
    return { data: null, error: err instanceof Error ? err : new Error("Unknown error") };
  }
}