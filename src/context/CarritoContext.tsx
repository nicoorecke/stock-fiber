'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Producto } from '@/src/components/productos'

// Define qué es un item del carrito (producto + cantidad)
interface ItemCarrito {
  producto: Producto
  cantidad: number
}

// Define qué funciones y datos tendrá disponible el Context
interface CarritoContextType {
  items: ItemCarrito[]
  agregarAlCarrito: (producto: Producto) => void
  eliminarDelCarrito: (id: number) => void
  vaciarCarrito: () => void
  cantidadTotal: number
  precioTotal: number
}

// Crea el Context (todavía vacío)
const CarritoContext = createContext<CarritoContextType | undefined>(undefined)

// Provider: envuelve la app y provee el estado del carrito
export function CarritoProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ItemCarrito[]>([])

  // Función para agregar producto
  const agregarAlCarrito = (producto: Producto) => {
    setItems((prevItems) => {
      // Verifica si el producto ya está en el carrito
      const itemExiste = prevItems.find(
        (item) => item.producto.id === producto.id
      )

      if (itemExiste) {
        // Si existe, aumenta la cantidad
        return prevItems.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      } else {
        // Si no existe, agrégalo con cantidad 1
        return [...prevItems, { producto, cantidad: 1 }]
      }
    })
  }

  // Función para eliminar producto
  const eliminarDelCarrito = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.producto.id !== id))
  }

  // Función para vaciar todo el carrito
  const vaciarCarrito = () => {
    setItems([])
  }

  // Calcula cantidad total de productos
  const cantidadTotal = items.reduce((total, item) => total + item.cantidad, 0)

  // Calcula precio total
  const precioTotal = items.reduce(
    (total, item) => total + (item.producto.precio || 0) * item.cantidad,
    0
  )

  return (
    <CarritoContext.Provider
      value={{
        items,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        cantidadTotal,
        precioTotal,
      }}
    >
      {children}
    </CarritoContext.Provider>
  )
}

// Hook personalizado para usar el carrito fácilmente
export function useCarrito() {
  const context = useContext(CarritoContext)
  if (context === undefined) {
    throw new Error('useCarrito debe usarse dentro de CarritoProvider')
  }
  return context
}