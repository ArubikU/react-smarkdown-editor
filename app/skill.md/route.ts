
import { NextRequest, NextResponse } from "next/server"

export function GET(req: NextRequest) {
  const host = req.headers.get("host") || "localhost:3000"
  const protocol = req.headers.get("x-forwarded-proto") || "http"
  const baseUrl = `${protocol}://${host}`

  const markdown = `# SMarkdown API Skill

This skill allows you to interact with the SMarkdown editor API to save and load markdown content.

## Base URL
\`${baseUrl}\`

## Endpoints

### 1. Save Markdown
**Endpoint:** \`/api/save-markdown\`
**Method:** \`POST\`
**Description:** Saves a new markdown document.
**Headers:**
- \`Content-Type: application/json\`
**Body:**
\`\`\`json
{
  "title": "Document Title",
  "content": "# Markdown Content Here"
}
\`\`\`
**Response:**
\`\`\`json
{
  "id": "generated_id"
}
\`\`\`
**Usage:** Use this endpoint to save content created by the user. Returns an ID which can be used to construct the view URL: \`${baseUrl}/render/{id}\`.

### 2. Load Markdown
**Endpoint:** \`/api/load-markdown/{id}\`
**Method:** \`GET\`
**Description:** Retrieves the content of a saved markdown document.
**Response:**
\`\`\`json
{
  "title": "Document Title",
  "content": "# Markdown Content Here"
}
\`\`\`
**Usage:** Use this endpoint to read the content of a document when provided with an ID or a full URL like \`${baseUrl}/render/{id}\`.
`

  return new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  })
}
