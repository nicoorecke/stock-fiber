import Link from 'next/link'
import './globals.css'

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Bienvenido a Stock Fiber</h1>
        <p>Los mejores productos al mejor precio</p>
        <Link href="/productos" className="btn-primary">
          Ver Productos
        </Link>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Envíos a todo el país</h3>
          <p>Seguí tu pedido en tiempo real</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💳</div>
          <h3>Pago Seguro</h3>
          <p>Múltiples métodos de pago</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📞</div>
          <h3>Contactanos</h3>
          <p>Consultá por cualquier producto</p>
        </div>
      </div>
    </div>
  )
}