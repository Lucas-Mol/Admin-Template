import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Template',
  description: 'Creating a admin template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-poppins-400'>{children}</body>
    </html>
  )
}
