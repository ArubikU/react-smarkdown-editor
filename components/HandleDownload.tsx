"use client"

import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"
import { Download, FileText } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

interface SimpleMarkdownWithDownloadProps {
  content: string
  fileName?: string
}

export function SimpleMarkdownWithDownload({ content, fileName = "document.md" }: SimpleMarkdownWithDownloadProps) {
  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const [pdfExporting, setPdfExporting] = useState(false)

  useEffect(() => {
    if (pdfExporting) {
      const element = document.querySelector("#capture")
      if (!element) return

      const originalHeight = element.scrollHeight
      const originalWidth = element.scrollWidth

      html2canvas(element as HTMLElement, {
        height: originalHeight,
        width: originalWidth,
        scale: 2,
        scrollY: -window.scrollY,
        windowHeight: originalHeight,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: true,
        onclone: (clonedDoc) => {
          const elements = clonedDoc.querySelectorAll("#capture *")
          elements.forEach((el) => {
            const styles = window.getComputedStyle(el)
            ;(el as HTMLElement).style.cssText = styles.cssText
          })
        },
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png")
        const pdf = new jsPDF({
          orientation: originalWidth > originalHeight ? "landscape" : "portrait",
          unit: "px",
          format: [originalWidth, originalHeight],
        })

        pdf.addImage(imgData, "PNG", 0, 0, originalWidth, originalHeight)
        pdf.save("download.pdf")
        setPdfExporting(false)
      })
    }
  }, [pdfExporting])

  const handlePdfExport = () => {
    setPdfExporting(true)
  }

  return (
    <>
      <Button onClick={handleDownload} variant="ghost" size="icon">
        <Download className="h-5 w-5" />
      </Button>
      <Button onClick={handlePdfExport} variant="ghost" size="icon" disabled={pdfExporting}>
        <FileText className="h-5 w-5" />
      </Button>
    </>
  )
}

