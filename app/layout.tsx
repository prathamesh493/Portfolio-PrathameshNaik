import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Prathamesh Naik - Portfolio",
  description: "Personal portfolio website showcasing projects, skills, and achievements.",
  openGraph: {
    title: "Prathamesh Naik - Portfolio",
    description: "View my projects, skills, and resume.",
    url: "https://yourwebsite.com",
    images: ["/images/preview.png"],
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50`}>
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

