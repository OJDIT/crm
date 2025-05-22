"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function GalleryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Worship Services", "Youth Events", "Community Outreach", "Conferences", "Special Events"]

  const galleryItems = [
    {
      id: 1,
      title: "Sunday Worship Service",
      category: "Worship Services",
      date: "May 19, 2025",
      image: "/placeholder.svg?height=400&width=600",
      description: "Congregation in worship during Sunday morning service",
    },
    {
      id: 2,
      title: "Youth Camp 2024",
      category: "Youth Events",
      date: "June 15, 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Youth participating in outdoor activities during summer camp",
    },
    {
      id: 3,
      title: "Community Food Drive",
      category: "Community Outreach",
      date: "April 20, 2025",
      image: "/placeholder.svg?height=400&width=600",
      description: "Church members distributing food to local families",
    },
    {
      id: 4,
      title: "Family Conference",
      category: "Conferences",
      date: "August 12, 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Families attending the annual family conference",
    },
    {
      id: 5,
      title: "Christmas Carol Service",
      category: "Special Events",
      date: "December 20, 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Children performing during Christmas carol service",
    },
    {
      id: 6,
      title: "Baptism Service",
      category: "Worship Services",
      date: "March 15, 2025",
      image: "/placeholder.svg?height=400&width=600",
      description: "New believers being baptized",
    },
    {
      id: 7,
      title: "Youth Bible Study",
      category: "Youth Events",
      date: "May 10, 2025",
      image: "/placeholder.svg?height=400&width=600",
      description: "Young people engaged in Bible study session",
    },
    {
      id: 8,
      title: "Medical Outreach",
      category: "Community Outreach",
      date: "February 28, 2025",
      image: "/placeholder.svg?height=400&width=600",
      description: "Free medical checkup for community members",
    },
    {
      id: 9,
      title: "Prayer Retreat",
      category: "Special Events",
      date: "January 20, 2025",
      image: "/placeholder.svg?height=400&width=600",
      description: "Church members in prayer during weekend retreat",
    },
    {
      id: 10,
      title: "Children's Ministry",
      category: "Youth Events",
      date: "May 5, 2025",
      image: "/placeholder.svg?height=400&width=600",
      description: "Children learning Bible stories through interactive activities",
    },
    {
      id: 11,
      title: "Harvest Thanksgiving",
      category: "Special Events",
      date: "October 15, 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Annual harvest thanksgiving celebration",
    },
    {
      id: 12,
      title: "Leadership Conference",
      category: "Conferences",
      date: "September 8, 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Church leaders attending leadership development conference",
    },
  ]

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

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
            <Link href="/messages" className="text-sm font-medium hover:text-red-600 transition-colors">
              Messages
            </Link>
            <Link href="/gallery" className="text-sm font-medium text-red-600">
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
                className="text-sm font-medium hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Messages
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-medium text-red-600"
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">Photo Gallery</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Moments captured from our church events, services, and community activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="w-full py-8 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer">
                      <div className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                          <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                          <p className="text-white/80 text-xs">{item.date}</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="space-y-4">
                      <div className="aspect-video relative overflow-hidden rounded-lg">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl font-bold text-red-600">{item.title}</h2>
                          <Badge variant="secondary">{item.category}</Badge>
                        </div>
                        <p className="text-sm text-gray-500">{item.date}</p>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No photos found in this category.</p>
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
