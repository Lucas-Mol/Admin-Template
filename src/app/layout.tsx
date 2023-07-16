import { ThemeProvider } from '@/data/context/ThemeContext'
import './globals.css'
import type { Metadata } from 'next'
import useThemeContext from '@/data/hook/useThemeContext'

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
        <body className={`font-poppins-400`}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
    </html>
  )
}
