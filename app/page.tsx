"use client"

import dynamic from "next/dynamic"
import { ThemeProvider } from "../components/ThemeProvider"

const MarkdownEditor = dynamic(() => import("../components/MarkdownEditor"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
})

export default function Home() {
  return (
    <ThemeProvider>
      <MarkdownEditor />
    </ThemeProvider>
  )
}

