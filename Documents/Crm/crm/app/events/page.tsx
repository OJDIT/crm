"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const events = [
    {
      id: "youth-camp",
      title: "Youth Camp",
      date: "June 15-20, 2025",
      time: "All Day",
      location: "Camp Grounds, Abuja",
      description:
        "A week of fun, fellowship, and spiritual growth for youth ages 12-18. Activities include worship sessions, outdoor adventures, team building exercises, and biblical teachings.",
      capacity: "50 participants",
      status: "Open for Registration",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "community-outreach",
      title: "Community Outreach",
      date: "July 8, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Various locations in Dutse Alhaji",
      description:
        "Join us as we serve our local community through various service projects including food distribution, medical outreach, and educational support.",
      capacity: "100 volunteers",
      status: "Registration Open",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "family-conference",
      title: "Family Conference",
      date: "August 12-14, 2025",
      time: "6:00 PM - 9:00 PM daily",
      location: "CRM Altar of Favour Main Hall",
      description:
        "A special conference focused on strengthening families through God's word. Topics include marriage enrichment, parenting, and building godly homes.",
      capacity: "200 families",
      status: "Early Bird Registration",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "prayer-retreat",
      title: "Prayer and Fasting Retreat",
      date: "September 5-7, 2025",
      time: "Friday 6PM - Sunday 6PM",
      location: "CRM Altar of Favour",
      description:
        "A powerful time of seeking God's face through prayer, fasting, and worship. Experience breakthrough and spiritual renewal.",
      capacity: "150 participants",
      status: "Coming Soon",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "harvest-thanksgiving",
      title: "Harvest Thanksgiving",
      date: "October 15, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "CRM Altar of Favour",
      description:
        "Annual harvest thanksgiving service with special thanksgiving offerings, cultural displays, and community feast.",
      capacity: "500+ attendees",
      status: "Save the Date",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "christmas-carol",
      title: "Christmas Carol Service",
      date: "December 20, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "CRM Altar of Favour",
      description:
        "Join us for a beautiful evening of Christmas carols, nativity play, and celebration of Christ's birth.",
      capacity: "300 attendees",
      status: "Save the Date",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

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
            <Link href="/events" className="text-sm font-medium text-red-600">
              Events
            </Link>
            <Link href="/messages" className="text-sm font-medium hover:text-red-600 transition-colors">
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
                className="text-sm font-medium text-red-600"
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">Church Events</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for upcoming events, conferences, and activities at CRM Altar of Favour.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <Card key={event.id} className="shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-red-600">{event.title}</CardTitle>
                      <Badge variant={event.status === "Open for Registration" ? "default" : "secondary"}>
                        {event.status}
                      </Badge>
                    </div>
                    <CardDescription>{event.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600">{event.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="h-4 w-4" />
                        {event.capacity}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Link href={`/events/${event.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    {event.status.includes("Registration") && (
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 flex-1">
                        Register
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
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
