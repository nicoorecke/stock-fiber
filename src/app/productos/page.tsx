'use client'

import { productos, Producto } from '@/src/components/productos'


export default function ProductosPage() {

  return (
    <div className="productos-container">
      <h1 className="productos-title">Nuestros Productos</h1>
      
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img 
              src={"/" + producto.imagen}
              alt={producto.tipo}
              className="producto-imagen"
            />
            <div className="producto-info">
              <h2 className="producto-tipo">{producto.fabricante}</h2>
              <p className="producto-descripcion">{producto.modelo}</p>
              <p className="producto-precio">${producto.precio}</p>
              <p className="producto-fabricante">{producto.descripcion}</p>
              <p className="producto-modelo">{producto.tipo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}