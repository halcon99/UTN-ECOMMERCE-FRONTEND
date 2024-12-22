import React from "react"
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <img
            src="/images/fravegalogo.png" 
            alt="Frávega Logo"
          />
          <div className="footer__social">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-linkedin"></i>
          </div>
        </div>
        <div className="footer__contact">
          <p>
            <strong>Atención al cliente:</strong> <br />
            0800 122 0338 <br />
            0810 999 3728 <br />
            LU-VI de 09:00 a 18:00 <br />
            SA de 09:00 a 13:00
          </p>
          <p>
            <strong>Cobranza de créditos:</strong> <br />
            cobranzas@fravega.com.ar
          </p>
          <p>
            <strong>Venta telefónica:</strong> <br />
            0810 333 8700 <br />
            LU-VI de 8:00 a 20:00 <br />
            SA-DO de 9:00 a 21:00
          </p>
          <p>
            <strong>Servicios a empresas:</strong> <br />
            Ventas corporativas
          </p>
        </div>
      </div>

      
      <div className="footer__bottom">
        <div className="footer__newsletter">
          <p>Recibí ofertas y promociones</p>
          <form className="footer-form">
            <input
              type="email"
              placeholder="Ingresá tu email"
              className="footer__input"
            />
            <button type="submit" className="footer__button">SUSCRIBIRME</button>
          </form>
        </div>
        <div className="footer__links">
          <div>
            <h4>Comprar en Fravega.com</h4>
            <ul>
              <li>Servicio técnico</li>
              <li>Información legal</li>
              <li>Botón de arrepentimiento</li>
              <li>Protección de Usuarios Financieros</li>
              <li>Medios de Pagos</li>
            </ul>
          </div>
          <div>
            <h4>Frávega Créditos</h4>
            <ul>
              <li>Pagá Online</li>
              <li>Catálogo exclusivo</li>
              <li>Condiciones</li>
              <li>Simulá tu Crédito</li>
            </ul>
          </div>
          <div>
            <h4>Recomendados</h4>
            <ul>
              <li>Smart TV</li>
              <li>Celulares</li>
              <li>Aire acondicionado</li>
              <li>Más vendidos Marketplace</li>
            </ul>
          </div>
          <div>
            <h4>Ayuda</h4>
            <ul>
              <li>Centro de ayuda</li>
              <li>Contactanos</li>
              <li>Sucursales</li>
              <li>Vendé en Frávega</li>
              <li>Trabajá con nosotros</li>
            </ul>
          </div>
          <div>
            <h4>Beneficios</h4>
            <ul>
              <li>Personal Pay</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

