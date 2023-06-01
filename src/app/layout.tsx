import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Erick Hogarth',
  description: 'Meu portfolio =)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-neutral-900 bg-background-texture bg-cover bg-fixed text-stone-400 antialiased`}>{children}</body>
    </html>
  )
}
