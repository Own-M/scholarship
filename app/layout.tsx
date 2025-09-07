// 'use client' লাগবে না কারণ Layout server component হতে পারে
import "./globals.css"
import { ReactNode } from "react"

// যদি আগে আপনি geist fonts import করছিলেন, সেগুলো সরাসরি CSS এ apply করুন
// import { geistSans, geistMono } from "@/lib/fonts" 

export const metadata = {
  title: "Chevening Scholarship 2025 – Bangladesh",
  description: "Fully Funded Scholarship Assistance Program by Gainers Future",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* সরাসরি className দিয়ে dynamic values না দেওয়াই safest */}
      <body className="antialiased bg-blue-900 text-white">
        {children}
      </body>
    </html>
  )
}
