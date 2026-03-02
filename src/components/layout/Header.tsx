'use client'

import Link from 'next/link'
import { useCarrito } from '@/src/context/CarritoContext'
import { useTheme } from '@/src/context/ThemeContext'

export default function Header() {

  const { tema, toggleTema } = useTheme()

  return (
    <header className="header">
      <nav className="header-nav">
        <Link href="/" className="header-logo">
          Stock Fiber
        </Link>
        <div className="header-links">
          <Link href="/" className="header-link">
            Inicio
          </Link>
          <Link href="/productos" className="header-link">
            Productos
          </Link>
          <button onClick={toggleTema} className="theme-toggle">
            {tema === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    </header>
  )
}