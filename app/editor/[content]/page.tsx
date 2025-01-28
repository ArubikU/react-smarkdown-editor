"use client"

import loading from "@/components/Loading"
import dynamic from "next/dynamic"
import { ThemeProvider } from "../../../components/ThemeProvider"

const MarkdownEditor = dynamic(() => import("../../../components/MarkdownEditor"), {
  ssr: false,
  loading: () => loading,
})

export default function RenderPage() {
  return (
    <ThemeProvider>
      <MarkdownEditor />
    </ThemeProvider>
  )
}

