'use client'

import { SimpleMarkdown } from "@arubiku/react-markdown"
import { Copy, Share2, Upload } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('')
  const [shareUrl, setShareUrl] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    // Check if there's a redirected path stored in localStorage
    const redirectedPath = localStorage.getItem("redirectedPath");
    if (redirectedPath) {
      // Navigate to the stored path
      navigate(redirectedPath);
      // Clear the redirected path from localStorage
      localStorage.removeItem("redirectedPath");
    } else {
      // Default navigation if no redirected path is found
      navigate('/react-smarkdown-editor/');
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const encodedContent = params.get('content')
    if (encodedContent) {
      const decodedContent = atob(decodeURIComponent(encodedContent))
      setMarkdown(decodedContent)
    }
  }, [])

  const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        setMarkdown(content)
      }
      reader.readAsText(file)
    }
  }

  const handleShare = () => {
    const encodedContent = encodeURIComponent(btoa(markdown))
    const url = `${window.location.origin}${window.location.pathname}?content=${encodedContent}`
    setShareUrl(url)
  }

  const handleCopyShareUrl = () => {
    navigator.clipboard.writeText(shareUrl)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === 'b') {
      e.preventDefault()
      wrapSelectionWith('**') // Bold
    }
    if (e.ctrlKey && e.key === 'i') {
      e.preventDefault()
      wrapSelectionWith('*') // Italic
    }
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault()
      wrapSelectionWith('# ') // Heading
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault()
      wrapSelectionWith('```\n', '\n```') // Code Block
    }
  }

  const wrapSelectionWith = (prefix: string, suffix: string = prefix) => {
    const textarea = document.querySelector('textarea')
    if (!textarea) return
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = markdown.substring(start, end)
    const newText = markdown.substring(0, start) + prefix + selectedText + suffix + markdown.substring(end)
    setMarkdown(newText)
    // Restore the selection to include the formatting
    setTimeout(() => {
      textarea.selectionStart = start + prefix.length
      textarea.selectionEnd = end + prefix.length
    }, 0)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          <Input
            type="file"
            accept=".md,.txt"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <Button onClick={() => document.getElementById('file-upload')?.click()}>
            <Upload className="mr-2 h-4 w-4" /> Upload Markdown
          </Button>
          <Button onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
        </div>
        {shareUrl && (
          <div className="flex items-center space-x-2">
            <Input value={shareUrl} readOnly />
            <Button onClick={handleCopyShareUrl}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4">
            <Textarea
              value={markdown}
              onChange={handleMarkdownChange}
              onKeyDown={handleKeyDown} // Capture keyboard shortcuts
              placeholder="Enter your Markdown here..."
              className="w-full h-[calc(100vh-200px)] resize-none"
            />
          </Card>
          <Card className="p-4">
            <div
              className="prose max-w-none h-[calc(100vh-200px)] overflow-auto text-sm overflow-auto bg-white dark:bg-neutral-900"
            >
              <SimpleMarkdown content={markdown}></SimpleMarkdown>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
