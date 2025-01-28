"use client"

import { HighlighterProvider, SimpleMarkdown } from "@arubiku/react-markdown"
import { ChevronDown, ChevronUp, Copy, Download, Globe2, Moon, Save, Share2, Sun, Upload } from "lucide-react"
import Head from "next/head"
import { useRouter } from "next/navigation"
import type React from "react"
import { useEffect, useState } from "react"
import { compressToBase64, decompressFromBase64 } from "trapnz-lz-string"
import { SimpleMarkdownWithDownload } from "./HandleDownload"
import { useTheme } from "./ThemeProvider"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const ShortcutDisplay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full flex justify-between items-center">
          Keyboard Shortcuts
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">
        <Card className="p-4">

        <ul className="space-y-2">
            <li className="flex justify-between">
              <span><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">B</kbd></span>
              <span>Bold</span>
            </li>
            <li className="flex justify-between">
              <span><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">I</kbd></span>
              <span>Italic</span>
            </li>
            <li className="flex justify-between">
              <span><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">H</kbd></span>
              <span>Heading</span>
            </li>
            <li className="flex justify-between">
              <span><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">Shift</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">S</kbd></span>
              <span>Strikethrough</span>
            </li>
            <li className="flex justify-between">
              <span><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">Shift</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">C</kbd></span>
              <span>Code Block</span>
            </li>
            <li className="flex justify-between">
              <span><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">`</kbd></span>
              <span>Superscript</span>
            </li>
            <li className="flex justify-between">
              <span><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">~</kbd></span>
              <span>Subscript</span>
            </li>
            <li className="flex justify-between">
              <span><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">=</kbd></span>
              <span>Highlight</span>
            </li>
            <li className="flex justify-between">
              <span><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-200 dark:bg-white dark:text-neutral-900 border border-gray-200 rounded-lg">q</kbd></span>
              <span>Emoji Shortcode</span>
            </li>
          </ul>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  )
}

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("")
  const [shareUrl, setShareUrl] = useState("")
  const [isRenderOnly, setIsRenderOnly] = useState(false)
  const [title, setTitle] = useState("Markdown Editor")
  const [tags, setTags] = useState<string[]>([])
  const [previewImage, setPreviewImage] = useState("")
  const router = useRouter()
  const { theme } = useTheme()

  useEffect(() => {
    const pathname = window.location.pathname
    if (pathname.startsWith("/render/")) {
      const encodedContent = pathname.replace("/render/", "")
      const decodedContent = decompressFromBase64(encodedContent)
      setMarkdown(decodedContent || "")
      setIsRenderOnly(true)
    } else if(pathname.startsWith("/editor/")) {
      const encodedContent = pathname.replace("/editor/", "")
      const decodedContent = decompressFromBase64(encodedContent)
      setMarkdown(decodedContent || "")
      setIsRenderOnly(false)
    }  else if (pathname.startsWith("/renderurl/")) {
      const rawUrl = pathname.replace("/renderurl/", "")
      fetch(decodeURIComponent(rawUrl))
        .then((response) => response.text())
        .then((content) => {
          setMarkdown(content)
          setIsRenderOnly(true)
        })
        .catch(() => {
          setMarkdown("")
          setIsRenderOnly(true)
        })
    } else if (pathname.startsWith("/m/")) {
      const id = pathname.replace("/m/", "")
      fetch(`/api/load-markdown/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.content) {
            setMarkdown(data.content)
            setTitle(data.title || "Shared Markdown")
            setIsRenderOnly(true)
          }
        })
        .catch(() => {
          setMarkdown("")
          setIsRenderOnly(true)
        })
    } else if (pathname.startsWith("/md/")) {
      const id = pathname.replace("/md/", "")
      fetch(`/api/load-markdown/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.content) {
            setMarkdown(data.content)
            setTitle(data.title || "Shared Markdown")
            setIsRenderOnly(false)
          }
        })
        .catch(() => {
          setMarkdown("")
          setIsRenderOnly(false)
        })
    } else {
      const encodedContent = pathname.slice(1)
      if (encodedContent) {
        const decodedContent = decompressFromBase64(encodedContent)
        setMarkdown(decodedContent || "")
      }
    }
  }, [])

  useEffect(() => {
    if (!isRenderOnly) {
      localStorage.setItem("markdownContent", markdown)
    }
  }, [markdown, isRenderOnly])

  useEffect(() => {
    if (!isRenderOnly) {
      const savedMarkdown = localStorage.getItem("markdownContent")
      if (savedMarkdown) {
        setMarkdown(savedMarkdown)
      }
    }
  }, [isRenderOnly])

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

  const handleShare = (renderOnly = false) => {
    const encodedContent = compressToBase64(markdown)
    const baseUrl = window.location.origin
    const url = renderOnly ? `${baseUrl}/render/${encodedContent}` : `${baseUrl}/editor/${encodedContent}`
    setShareUrl(url)
  }

  const handleCopyShareUrl = () => {
    navigator.clipboard.writeText(shareUrl)
  }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.ctrlKey) {
        switch (e.key) {
          case 'b':
            e.preventDefault()
            wrapSelectionWith('**')
            break
          case 'i':
            e.preventDefault()
            wrapSelectionWith('*')
            break
          case 'h':
            e.preventDefault()
            addPrefix('# ')
            break
          case 'S':
            if (e.shiftKey) {
              e.preventDefault()
              wrapSelectionWith('~~')
            }
            break
          case 'C':
            if (e.shiftKey) {
              e.preventDefault()
              wrapSelectionWith('```\n', '\n```')
            }
            break
          case '`':
            e.preventDefault()
            wrapSelectionWith('^')
            break
          case '~':
            e.preventDefault()
            wrapSelectionWith('~')
            break
          case '=':
            e.preventDefault()
            wrapSelectionWith('==')
            break
          case 'q':
            e.preventDefault()
            addEmoji()
            break
        }
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
      setTimeout(() => {
        textarea.selectionStart = start + prefix.length
        textarea.selectionEnd = end + prefix.length
        textarea.focus()
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
      setTimeout(() => {
        textarea.selectionStart = start + prefix.length
        textarea.selectionEnd = end + prefix.length
        textarea.focus()
      }, 0)
    }
  
    const addEmoji = () => {
      const textarea = document.querySelector('textarea')
      if (!textarea) return
      const start = textarea.selectionStart
      const newText = markdown.substring(0, start) + ':' + markdown.substring(start)
      setMarkdown(newText)
      setTimeout(() => {
        textarea.selectionStart = start + 1
        textarea.selectionEnd = start + 1
        textarea.focus()
      }, 0)
    }
  const handleSave = async () => {
    const response = await fetch("/api/save-markdown", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: markdown, title, tags, previewImage }),
    })

    const data = await response.json()

    if (data.id) {
      const url = `${window.location.origin}/m/${data.id}`
      setShareUrl(url)
    }
  }

  const handleLoad = async () => {
    const id = prompt("Enter the markdown ID:")
    if (id) {
      const response = await fetch(`/api/load-markdown/${id}`)
      const data = await response.json()

      if (data.content) {
        setMarkdown(data.content)
        setTitle(data.title || "Loaded Markdown")
      }
    }
  }

  const handleAddTag = (tag: string) => {
    setTags([...tags, tag])
  }

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
  }

  const handlePreviewImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const metaDescription = isRenderOnly
    ? "View this shared markdown document"
    : "Create, edit, and share markdown documents online"

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={shareUrl || window.location.href} />
        <meta property="og:image" content={previewImage || `${window.location.origin}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={previewImage || `${window.location.origin}/og-image.png`} />
      </Head>
      <HighlighterProvider>
        {isRenderOnly ? (
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">{title}</h1>
              <div>
                <SimpleMarkdownWithDownload content={markdown} />
                <ThemeToggle />
              </div>
            </div>
            <div id="capture" className="font-mono text-sm overflow-auto p-4 rounded-lg">
              <SimpleMarkdown content={markdown} theme={theme} />
            </div>
          </div>
        ) : (
          <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Markdown Editor</h1>
              <ThemeToggle />
            </div>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter document title"
              className="mb-4"
            />
            <ShortcutDisplay />
            <div className="flex flex-col space-y-4 mt-4">
              <div className="flex space-x-4">
                <Input
                  type="file"
                  accept=".md,.txt,.markdown"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Button onClick={() => document.getElementById("file-upload")?.click()}>
                  <Upload className="mr-2 h-4 w-4" /> Upload Markdown
                </Button>
                <Button onClick={() => handleShare()}>
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
                <Button onClick={() => handleShare(true)}>
                  <Globe2 className="mr-2 h-4 w-4" /> Render share
                </Button>
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" /> Save to Cloud
                </Button>
                <Button onClick={handleLoad}>
                  <Download className="mr-2 h-4 w-4" /> Load from Cloud
                </Button>
              </div>
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Add a tag"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleAddTag(e.currentTarget.value)
                      e.currentTarget.value = ""
                    }
                  }}
                />
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handlePreviewImageChange}
                  className="hidden"
                  id="preview-image-upload"
                />
                <Button onClick={() => document.getElementById("preview-image-upload")?.click()}>
                  <Upload className="mr-2 h-4 w-4" /> Upload Preview Image
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tag}
                    <button onClick={() => handleRemoveTag(tag)} className="ml-2 text-xs">
                      &times;
                    </button>
                  </span>
                ))}
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
                    onKeyDown={handleKeyDown}
                    placeholder="Enter your Markdown here..."
                    className="w-full h-[calc(100vh-400px)] resize-none"
                  />
                </Card>
                <Card className="p-4 rounded-lg overflow-hidden">
                  <div id="capture" className="font-mono text-sm overflow-auto h-[calc(100vh-400px)]">
                    <SimpleMarkdown content={markdown} theme={theme} />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}
      </HighlighterProvider>
    </>
  )
}

