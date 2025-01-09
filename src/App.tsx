'use client'

import { SimpleMarkdown } from "@arubiku/react-markdown"
import { ChevronDown, ChevronUp, Copy, Download, Globe2, Moon, Share2, Sun, Upload } from 'lucide-react'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import 'trapnz-lz-string'
import { compressToBase64, decompressFromBase64 } from "trapnz-lz-string"
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./components/ui/collapsible"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"

// Theme context and provider
type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

interface SimpleMarkdownWithDownloadProps {
  content: string;
  fileName?: string;
  // Include all other props from SimpleMarkdown
  className?: string;
  ctexTclass?: string;
  imageHeight?: number;
  theme?: 'light' | 'dark';
  codeBlockTheme?: string;
  tableHeaderClass?: string;
  tableCellClass?: string;
  extraAlerts?: any[]; // You might want to define a more specific type for extraAlerts
}

 function SimpleMarkdownWithDownload({
  content,
  fileName = 'document.md',
  ...rest
}: SimpleMarkdownWithDownloadProps) {
  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
      <Button 
        onClick={handleDownload}
        variant="ghost"
        size="icon"
      >
        <Download className="h-5 w-5" />
      </Button>
  );
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

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

// Theme toggle component
const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

// Main MarkdownEditor component
export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('')
  const [shareUrl, setShareUrl] = useState('')
  const [isRenderOnly, setIsRenderOnly] = useState(false)
  const navigate = useNavigate()
  const { theme } = useTheme()

  useEffect(() => {
    //verify if it is github pages
    if (window.location.href.includes('arubiku.github.io')) {
      
    const redirectedPath = localStorage.getItem("redirectedPath");
    if (redirectedPath) {
      // Navigate to the stored path
      navigate(redirectedPath);
      // Clear the redirected path from localStorage
      localStorage.removeItem("redirectedPath");
    }
  }
  }, [])
  useEffect(() => {
    const url = window.location.href
    const pathParts = url.split('/react-smarkdown-editor/')
    
    if (pathParts[1]?.startsWith('render/')) {
      const encodedContent = pathParts[1].replace('render/', '')
      const decodedContent = decompressFromBase64(encodedContent)
      setMarkdown(decodedContent || '')
      setIsRenderOnly(true)
    } else if (pathParts[1]?.startsWith('renderurl/')) {
      const rawUrl = pathParts[1].replace('renderurl/', '')
      fetch(decodeURIComponent(rawUrl))
        .then(response => response.text())
        .then(content => {
          setMarkdown(content )
          setIsRenderOnly(true)
        })
        .catch(() => {
          setMarkdown('')
          setIsRenderOnly(true)
        })
    } else {
      const encodedContent = pathParts[1]
      if (encodedContent) {
        const decodedContent = decompressFromBase64(encodedContent)
        setMarkdown(decodedContent || '')
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

  const handleShare = (renderOnly: boolean = false) => {
    const encodedContent = compressToBase64(markdown)
    const baseUrl = 'https://arubiku.github.io/react-smarkdown-editor/'
    const url = renderOnly ? `${baseUrl}render/${encodedContent}` : `${baseUrl}${encodedContent}`
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
  if (isRenderOnly) {
    return (
      <div className="container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Markdown Render</h1>
        <div>
        <SimpleMarkdownWithDownload content={markdown} theme={theme}/>
        <ThemeToggle />
        </div>
      </div>
      
        <div className="font-mono text-sm overflow-auto p-4 rounded-lg">
          <SimpleMarkdown content={markdown}  theme={theme}/>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Markdown Editor</h1>
        <ThemeToggle />
      </div>
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
          <Button onClick={() => document.getElementById('file-upload')?.click()}>
            <Upload className="mr-2 h-4 w-4" /> Upload Markdown
          </Button>
          <Button onClick={() => handleShare()}>
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
          <Button onClick={() => handleShare(true)}>
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
              onKeyDown={handleKeyDown}
              placeholder="Enter your Markdown here..."
              className="w-full h-[calc(100vh-400px)] resize-none"
            />
          </Card>
          <Card className="p-4 rounded-lg overflow-hidden">
            <div className="font-mono text-sm overflow-auto h-[calc(100vh-400px)]">
              <SimpleMarkdown content={markdown} theme={theme} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}