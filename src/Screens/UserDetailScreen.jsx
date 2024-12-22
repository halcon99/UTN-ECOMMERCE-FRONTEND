import React from 'react'

export const UserDetailScreen = ({user, logout}) => {
    const {name, email, verified}= user
    
  return (
    <div className="user-profile-container">
        <h1 className="profile-title">Perfil del Usuario</h1>
        <div className="profile-info">
            <p><strong>Nombre:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p>
                <strong>Cuenta Verificada:</strong>{' '}
                {verified ? (
                <span className="verified">✔ Verificada</span>
                ) : (
                <span className="not-verified">✖ No Verificada</span>
                )}
            </p>
        </div>
        <button className="logout-button" onClick={logout}>Cerrar Sesión</button>
    </div>
  )
}
