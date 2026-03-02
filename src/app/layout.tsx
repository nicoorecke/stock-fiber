import './globals.css'
import Header from '@/src/components/layout/Header'
import Footer from '@/src/components/layout/Footer'
import { Providers } from '@/src/components/layout/Providers'
import WhatsAppButton from '@/src/components/WhatsAppButton'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Providers>
          <Header />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </Providers>
        <WhatsAppButton/> 
      </body>
    </html>
  )
}
