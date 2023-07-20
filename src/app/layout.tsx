import { ThemeProvider } from '@/data/context/ThemeContext'
import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from '@/data/context/AuthContext'
import ConnectionWarning from '@/components/templates/ConnectionWarning'

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
        <body className={`font-poppins-400 min-h-screen`}>
          <ConnectionWarning />
          <AuthProvider>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </AuthProvider>
        </body>
    </html>
  )
}
