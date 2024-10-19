'use client'

import { SimpleMarkdown } from "@arubiku/react-markdown"
import { Copy, Globe2, Share2, Upload } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import 'trapnz-lz-string'
import { compressToBase64, decompressFromBase64 } from "trapnz-lz-string"
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('')
  const [shareUrl, setShareUrl] = useState('')
  const [isRenderOnly, setIsRenderOnly] = useState(false)


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
    const url = window.location.href;
    const pathParts = url.split('/react-smarkdown-editor/');
    const isRenderPath = pathParts[1]?.startsWith('render/');
    
    if (isRenderPath) {
      const encodedContent = pathParts[1].replace('render/', '');
      const decodedContent = decompressFromBase64(encodedContent);
      setMarkdown(decodedContent || '');
      setIsRenderOnly(true);
    } else {
      // Handle normal /react-smarkdown-editor/<encoding> path
      const encodedContent = pathParts[1];
      if (encodedContent) {
        const decodedContent = decompressFromBase64(encodedContent);
        setMarkdown(decodedContent || '');
      }
    }
  }, [])

  
  useEffect(() => {
    localStorage.setItem("markdownContent", markdown)
  }, [markdown])
  
  useEffect(() => {
    const savedMarkdown = localStorage.getItem("markdownContent")
    if (savedMarkdown) {
      setMarkdown(savedMarkdown) 
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
    const encodedContent = compressToBase64(markdown)
    const url = `${window.location.origin}${window.location.pathname}${encodedContent}`
    setShareUrl(url)
  }
  const handleShareRender = () => {
    const encodedContent = compressToBase64(markdown)
    const url = `${window.location.origin}${window.location.pathname}render/${encodedContent}`
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
      addPrefix('# ') // Heading
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'S') {
      e.preventDefault()
      wrapSelectionWith('__', '__') // Code Block
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
  const addPrefix = (prefix: string) => {
    const textarea = document.querySelector('textarea')
    if (!textarea) return
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = markdown.substring(start, end)
    const newText = markdown.substring(0, start) + prefix + selectedText + markdown.substring(end)
    setMarkdown(newText)
    // Restore the selection to include the formatting
    setTimeout(() => {
      textarea.selectionStart = start + prefix.length
      textarea.selectionEnd = end + prefix.length
    }, 0)
  }

  const addSuffix = (suffix: string) => {
    const textarea = document.querySelector('textarea')
    if (!textarea) return
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = markdown.substring(start, end)
    const newText = markdown.substring(0, start) + selectedText + suffix + markdown.substring(end)
    setMarkdown(newText)
    // Restore the selection to include the formatting
    setTimeout(() => {
      textarea.selectionStart = start + suffix.length
      textarea.selectionEnd = end + suffix.length
    }, 0)
  }


  if (isRenderOnly) {
    // Render-only mode
    return (
      <div className="container mx-auto">
        <div className="font-mono text-sm overflow-auto bg-white dark:bg-neutral-900 p-4 rounded-lg">
          <SimpleMarkdown content={markdown} />
        </div>
      </div>
    )
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
          <Button onClick={handleShareRender}>
            <Globe2 className="mr-2 h-4 w-4" /> Render share
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
          <Card className="p-4  rounded-lg overflow-hidden">
            <div
              className="font-mono text-sm overflow-auto bg-white dark:bg-neutral-900"
            >
              <SimpleMarkdown content={markdown}></SimpleMarkdown>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}