'use client'

import { useCarrito } from '@/src/context/CarritoContext'
import Link from 'next/link'

export default function CarritoPage() {
  const { items, eliminarDelCarrito, vaciarCarrito, cantidadTotal, precioTotal } = useCarrito()

  if (items.length === 0) {
    return (
      <div className="carrito-vacio">
        <h1>Tu carrito está vacío</h1>
        <Link href="/productos" className="btn-primary">
          Ver Productos
        </Link>
      </div>
    )
  }

  return (
    <div className="carrito-container">
      <h1 className="carrito-title">Tu Carrito</h1>

      <div className="carrito-items">
        {items.map((item) => (
          <div key={item.producto.id} className="carrito-item">
            <img 
              src={"/" + item.producto.imagen} 
              alt={item.producto.tipo}
              className="carrito-item-imagen"
            />
            <div className="carrito-item-info">
              <h3>{item.producto.fabricante} {item.producto.modelo}</h3>
              <p>{item.producto.tipo}</p>
              <p className="carrito-item-precio">
                ${item.producto.precio} x {item.cantidad} = ${(item.producto.precio || 0) * item.cantidad}
              </p>
            </div>
            <button 
              className="btn-eliminar"
              onClick={() => eliminarDelCarrito(item.producto.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="carrito-resumen">
        <h2>Resumen</h2>
        <p>Productos: {cantidadTotal}</p>
        <p className="carrito-total">Total: ${precioTotal.toFixed(2)}</p>
        <button className="btn-primary">Proceder al Pago</button>
        <button className="btn-secondary" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  )
}