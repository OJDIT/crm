"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Clock,
  Play,
  Download,
} from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
            <Link href="/gallery" className="text-sm font-medium hover:text-red-600 transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-red-600 transition-colors">
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
                className="text-sm font-medium hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="#contact"
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
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-red-600">
                    Welcome to CRM Altar of Favour
                  </h1>
                  <p className="max-w-[600px] text-gray-700 md:text-xl">
                    "For where two or three gather in my name, there am I with them." — Matthew 18:20
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button className="bg-red-600 hover:bg-red-700 w-full min-[400px]:w-auto">
                      Join Us This Sunday
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" className="w-full min-[400px]:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Church congregation"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Service Times */}
        <section className="w-full py-12 bg-red-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-around items-center gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="h-8 w-8" />
                <h3 className="text-xl font-bold">Sunday Service</h3>
                <p>8:00 AM</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="h-8 w-8" />
                <h3 className="text-xl font-bold">Bible Study</h3>
                <p>Tuesday 5:30 PM</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="h-8 w-8" />
                <h3 className="text-xl font-bold">Prayer Meeting</h3>
                <p>Friday 5:30 PM</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-8 w-8" />
                <h3 className="text-xl font-bold">Location</h3>
                <p>Zone 5 Omil Junction, Dutse Alhaji</p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section id="events" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">Upcoming Events</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for these upcoming events and activities at our church.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-red-600">Youth Camp</CardTitle>
                  <CardDescription>June 15-20, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>A week of fun, fellowship, and spiritual growth for youth ages 12-18.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/events/youth-camp">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-red-600">Community Outreach</CardTitle>
                  <CardDescription>July 8, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Join us as we serve our local community through various service projects.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/events/community-outreach">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-red-600">Family Conference</CardTitle>
                  <CardDescription>August 12-14, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>A special conference focused on strengthening families through God's word.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/events/family-conference">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link href="/events">
                <Button className="bg-red-600 hover:bg-red-700">View All Events</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Audio Messages Section */}
        <section id="messages" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">Audio Messages</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Listen to our latest sermons and messages from our church services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-red-600">Walking in Faith</CardTitle>
                  <CardDescription>Pastor John Smith • May 19, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A powerful message about trusting God's plan for your life even when the path isn't clear.
                  </p>
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
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-red-600">The Power of Prayer</CardTitle>
                  <CardDescription>Pastor John Smith • May 12, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Learn how prayer can transform your life and deepen your relationship with God.
                  </p>
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
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-red-600">Finding Peace in Troubled Times</CardTitle>
                  <CardDescription>Pastor John Smith • May 5, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Discover how to find God's peace even in the midst of life's most challenging circumstances.
                  </p>
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
            </div>
            <div className="flex justify-center">
              <Link href="/messages">
                <Button className="bg-red-600 hover:bg-red-700">Browse All Messages</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">Our Gallery</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Moments captured from our church events and activities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Church worship service"
                className="aspect-video rounded-xl object-cover shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Youth group activity"
                className="aspect-video rounded-xl object-cover shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Community outreach"
                className="aspect-video rounded-xl object-cover shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Bible study group"
                className="aspect-video rounded-xl object-cover shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Church picnic"
                className="aspect-video rounded-xl object-cover shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Children's ministry"
                className="aspect-video rounded-xl object-cover shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
            </div>
            <div className="flex justify-center">
              <Link href="/gallery">
                <Button className="bg-red-600 hover:bg-red-700">View More Photos</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">Contact Us</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We'd love to hear from you. Reach out to us with any questions or prayer requests.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <p>Zone 5 Omil Junction, Dutse Alhaji</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-red-600" />
                  <p>info@crmdutse.org</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <p>09035767132</p>
                </div>
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20Example%20St%2C%20New%20York%2C%20NY%2010006%2C%20USA!5e0!3m2!1sen!2sus!4v1652813333264!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Church Location"
                  ></iframe>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" placeholder="johndoe@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message or prayer request..." className="min-h-[150px]" />
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">Send Message</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-red-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Connected</h2>
                <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter to receive updates on church events and activities.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button type="submit" className="bg-white text-red-600 hover:bg-white/90">
                    Subscribe
                  </Button>
                </form>
              </div>
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
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-red-600">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-red-600">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-red-600">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-red-600">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
