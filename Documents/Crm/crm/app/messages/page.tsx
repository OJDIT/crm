"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Play, Download, Search, Calendar } from "lucide-react"

export default function MessagesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const messages = [
    {
      id: "walking-in-faith",
      title: "Walking in Faith",
      speaker: "Pastor John Smith",
      date: "May 19, 2025",
      series: "Faith Series",
      duration: "45 minutes",
      description:
        "A powerful message about trusting God's plan for your life even when the path isn't clear. Learn how to step out in faith and trust God's timing.",
      audioUrl: "#",
      downloadUrl: "#",
    },
    {
      id: "power-of-prayer",
      title: "The Power of Prayer",
      speaker: "Pastor John Smith",
      date: "May 12, 2025",
      series: "Prayer Life",
      duration: "38 minutes",
      description:
        "Learn how prayer can transform your life and deepen your relationship with God. Discover the different types of prayer and how to pray effectively.",
      audioUrl: "#",
      downloadUrl: "#",
    },
    {
      id: "finding-peace",
      title: "Finding Peace in Troubled Times",
      speaker: "Pastor John Smith",
      date: "May 5, 2025",
      series: "Peace Series",
      duration: "42 minutes",
      description:
        "Discover how to find God's peace even in the midst of life's most challenging circumstances. Learn biblical principles for maintaining peace.",
      audioUrl: "#",
      downloadUrl: "#",
    },
    {
      id: "love-of-god",
      title: "The Unfailing Love of God",
      speaker: "Pastor Mary Johnson",
      date: "April 28, 2025",
      series: "God's Love",
      duration: "40 minutes",
      description:
        "Explore the depth and breadth of God's love for humanity. Understand how His love transforms lives and gives hope to the hopeless.",
      audioUrl: "#",
      downloadUrl: "#",
    },
    {
      id: "spiritual-warfare",
      title: "Understanding Spiritual Warfare",
      speaker: "Pastor David Wilson",
      date: "April 21, 2025",
      series: "Spiritual Warfare",
      duration: "50 minutes",
      description:
        "Learn about the spiritual battles we face and how to stand firm in God's armor. Practical insights on overcoming spiritual attacks.",
      audioUrl: "#",
      downloadUrl: "#",
    },
    {
      id: "purpose-driven-life",
      title: "Living a Purpose-Driven Life",
      speaker: "Pastor John Smith",
      date: "April 14, 2025",
      series: "Purpose Series",
      duration: "44 minutes",
      description:
        "Discover God's purpose for your life and learn how to align your goals with His will. Find meaning and direction in your daily walk.",
      audioUrl: "#",
      downloadUrl: "#",
    },
    {
      id: "forgiveness",
      title: "The Gift of Forgiveness",
      speaker: "Pastor Mary Johnson",
      date: "April 7, 2025",
      series: "Forgiveness",
      duration: "36 minutes",
      description:
        "Learn about the power of forgiveness and how it sets you free. Understand how to forgive others and receive God's forgiveness.",
      audioUrl: "#",
      downloadUrl: "#",
    },
    {
      id: "financial-stewardship",
      title: "Biblical Financial Stewardship",
      speaker: "Pastor David Wilson",
      date: "March 31, 2025",
      series: "Stewardship",
      duration: "48 minutes",
      description:
        "Discover biblical principles for managing your finances. Learn about tithing, giving, and being a faithful steward of God's resources.",
      audioUrl: "#",
      downloadUrl: "#",
    },
  ]

  const filteredMessages = messages.filter(
    (message) =>
      message.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.series.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="CRM Altar of Favour Logo" width={50} height={50} />
            <span className="text-xl font-bold text-red-600">CRM Altar of Favour</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link href="/events" className="text-sm font-medium hover:text-red-600 transition-colors">
              Events
            </Link>
            <Link href="/messages" className="text-sm font-medium text-red-600">
              Messages
            </Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-red-600 transition-colors">
              Gallery
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-red-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            {mobileMenuOpen ? (
              <Button variant="outline" size="sm" onClick={() => setMobileMenuOpen(false)}>
                Close
              </Button>
            ) : (
              <Button variant="outline" size="sm" onClick={() => setMobileMenuOpen(true)}>
                Menu
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-4 bg-white border-b">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/events"
                className="text-sm font-medium hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/messages"
                className="text-sm font-medium text-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Messages
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-medium hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-medium hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">Audio Messages</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Listen to our latest sermons and messages from CRM Altar of Favour services.
                </p>
              </div>
              {/* Search Bar */}
              <div className="w-full max-w-md relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search messages, speakers, or series..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Messages Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6">
              {filteredMessages.map((message) => (
                <Card key={message.id} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-red-600">{message.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4">
                          <span>{message.speaker}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {message.date}
                          </span>
                          <span>{message.duration}</span>
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{message.series}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{message.description}</p>
                    <div className="flex items-center gap-4">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        <Play className="mr-2 h-4 w-4" /> Play
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredMessages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No messages found matching your search.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="CRM Altar of Favour Logo" width={40} height={40} />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CRM Altar of Favour. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
