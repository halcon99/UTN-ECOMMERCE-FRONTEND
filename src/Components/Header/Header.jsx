import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { HeaderFooterContext } from '../../context/HeaderFooterContext'


export const Header = () => {
    const {searchProduct, setSearchProduct}=useContext(HeaderFooterContext)
    
  return (
    <header className='header'>
        <div className='header_superior'>
            <div>
                <i className="bi bi-truck"></i>
                <span>Segui tu compra</span>
                <i className="bi bi-gear-fill"></i>
                <span>Servicio tecnico</span>
                <i className="bi bi-shop"></i>
                <span>Sucursales</span>
                <i className="bi bi-telephone-fill"></i>
                <span>Venta telefonica</span>
                <i className="bi bi-chat-fill"></i>
                <span>Centro de ayuda</span>
            </div>
            <div>
                <img src="/images/fravega2.png" alt="" />
            </div>
        </div>

        <div className='header_medio'>
            <Link to={'/'}>
                <img className='img_logo' src="/images/fravegalogo.png" alt="" />
            </Link>
            <div className='div_search'>
                <input type="text" placeholder='Buscar productos'
                value={searchProduct} onChange={(event)=> setSearchProduct(event.target.value)}/>
                <button><i className="bi bi-search"></i></button>
            </div>
            <div className="header_icons">
                <Link to={'/login'}>
                    <i className="bi bi-person-circle"></i>
                    <span>Mi cuenta</span>
                </Link>
                <Link to={'/cart'}>
                    <i className="bi bi-cart3"></i>
                </Link>
            </div>
        </div>

        <div className="header_inferior">
            <div>
                <i className="bi bi-list"></i><span>Categorias</span>
                <span>Ofertas</span>
                <span style={{fontWeight:'bold', color: '#801DD9'}}>Mas Vendidos</span>
                <span>Gangas</span>
                <span style={{fontWeight: 'bold', color: '#801DD9'}}>Freidoras de aire</span>
            </div>
            <div>
                <span>Simula tu Credito</span>
                <span>Tiendas Oficiales</span>
                <span>Vender</span>
            </div>

        </div>
        
    </header>
  )
}
