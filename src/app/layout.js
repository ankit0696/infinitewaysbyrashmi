import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Dr. Rashmi - Transform Your Energy, Transform Your Life',
    template: '%s | Infinite Ways by Rashmi'
  },
  description: 'Experience profound transformation with Dr. Rashmi, PhD. 6+ years expertise in quantum healing, sound therapy, Access Consciousness, DNA activation in Mumbai, India.',
  keywords: ['Dr. Rashmi', 'energy healing', 'quantum healing', 'sound therapy', 'Access Consciousness', 'DNA activation', 'spiritual healing', 'Mumbai healer', 'clairvoyant', 'reiki master'],
  authors: [{ name: 'Dr. Rashmi', url: 'https://infinitewaysbyrashmi.com' }],
  creator: 'Dr. Rashmi',
  publisher: 'Infinite Ways by Rashmi',
  metadataBase: new URL('https://infinitewaysbyrashmi.com'),
  openGraph: {
    title: 'Dr. Rashmi - Transform Your Energy, Transform Your Life',
    description: 'Experience profound transformation through quantum physics-based healing modalities',
    type: 'website',
    locale: 'en_US',
    url: 'https://infinitewaysbyrashmi.com',
    siteName: 'Infinite Ways by Rashmi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Rashmi - Transform Your Energy, Transform Your Life',
    description: 'Experience profound transformation through quantum physics-based healing modalities',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className={`${inter.className} bg-white text-gray-900 leading-relaxed`}>
        {children}
      </body>
    </html>
  )
}
