"use server"

import loading from "@/components/Loading"
import { getMarkdownTitle } from "@/lib/db"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ThemeProvider } from "../../../components/ThemeProvider"

const MarkdownEditor = dynamic(() => import("../../../components/MarkdownEditor"), {
  ssr: false,
  loading: () => loading,
})

// Helper to fetch the title on the server
async function fetchTitle(id: string): Promise<string> {
  const { data, error } = await getMarkdownTitle(id)
  if (!error && data) return data.title
  return "Untitled"
}

// Dynamic metadata export for Next.js with simple in-memory cache
const titleCache = new Map<string, string>()

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  let title = titleCache.get(params.id)
  if (!title) {
    title = await fetchTitle(params.id)
    titleCache.set(params.id, title)
  }
  return {
    title: `${title} - Markdown Editor`,
    description: "Markdown shared file hosted by SMarkdown",
    openGraph: {
      title: `${title} - Markdown Editor`,
      description: "Markdown shared file hosted by SMarkdown",
      type: "website",
      url: `https://smarkdown.vercel.app/render/${params.id}`,
    },
  }
}

export default async function MarkdownPage() {
  return (
    <ThemeProvider>
      <MarkdownEditor />
    </ThemeProvider>
  )
}
