//funcion que me devuelve los headers de una consulta autenticada

const getAuthenticatedHeaders=()=>{
    const acces_token= sessionStorage.getItem('acces-token')
    return {
        'Authorization': `Bearer ${acces_token}`,
        'Content-Type': 'application/json'
    }
}

export {getAuthenticatedHeaders}