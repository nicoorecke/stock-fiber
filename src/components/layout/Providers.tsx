'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from '@/src/context/ThemeContext'
import { CarritoProvider } from '@/src/context/CarritoContext'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <CarritoProvider>
        {children}
      </CarritoProvider>
    </ThemeProvider>
  )
}