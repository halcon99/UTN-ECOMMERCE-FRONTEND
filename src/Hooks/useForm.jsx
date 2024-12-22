import React, { useState } from 'react'


//logica de formulario y estados
const useForm = (formulario) => {
    const [formState, setFormState]= useState(formulario)

    const handleChange= (event)=>{
        const input_name= event.target.name
        const input_value= event.target.value

        setFormState((prevFormState)=>{
            return {...prevFormState, [input_name]:input_value}
        })
    }

    const handleChangeImage= (event, field_name)=>{
		const FILE_MB_LIMIT=2
		
       //llamo a la primera imagen cargada en este input 
       	const file= event.target.files[0]
       	const reader= new FileReader() //lector de archivo

		if (file && file.size > FILE_MB_LIMIT*1024*1024){
			alert('El archivo es muy pesado')
		}

		
       //evento que se va a activar cuando se termine de cargar el archivo
       	reader.onloadend= ()=>{
			const image_base64= reader.result   //el resultado de la lectura del archivo y esta en base64
			setFormState((prevFormState)=>{
            return {...prevFormState, [field_name]: image_base64}
        })
       }

	   	if (file){
			//leer y transformar a base64
			reader.readAsDataURL(file)
	   	}
    }

    return {
        formState,
        handleChange,
        handleChangeImage
		
    }
}

export default useForm