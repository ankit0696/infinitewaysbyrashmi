import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Dr. Rashmi Bohra - Energy Transformational Coach | Infinite Ways',
  description: 'Transform your energy, transform your life. Dr. Rashmi Bohra offers quantum physics-based healing, energy transformation, and spiritual counselling services.',
  keywords: 'energy healing, transformational coaching, spiritual counseling, quantum physics healing, tarot, astrology, DNA activation',
  authors: [{ name: 'Dr. Rashmi Bohra' }],
  openGraph: {
    title: 'Dr. Rashmi Bohra - Energy Transformational Coach',
    description: 'Transform your energy, transform your life with quantum physics-based healing.',
    url: 'https://infinitewaysbyrashmi.com',
    siteName: 'Infinite Ways by Rashmi',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
