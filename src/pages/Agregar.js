import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Diario() {  
  const [formData,setFormData] = React.useState(
    {
      tabla: "",
      valor: ""
    }
  )
  
  function handleChange(event){    
    const {name, value} = event.target;      
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: value        
      }
    })
  }

  function handleSubmit(event) {
      event.preventDefault();            
      formData.tabla === "canal" ? window.api.canal(formData.valor.toUpperCase()) : window.api.sector(formData.valor.toUpperCase());
}

  return (
    <div  className='diario'>      
      <Form className='forma' onSubmit={handleSubmit}>
        <h1 className='text-center mb-3'><strong>Agregar a Base de Datos</strong></h1> 

        <InputGroup className='w-100 my-5'>
          <Form.Select className='w-25'
            onChange={handleChange}
            value={formData.tabla}
            name="tabla"
          >
            <option> - </option>
            <option value="canal">Canal</option>
            <option value="sector">Sector</option>              
          </Form.Select>
          <Form.Control className='w-50'
            type="text"
            placeholder="Ingrese Texto"
            onChange={handleChange}
            name="valor"
            value={formData.valor}              
          />
          <Button type='submit' variant="secondary" className='w-25'>Guardar</Button>
        </InputGroup>

        <div id="respuesta"></div>
      </Form>      
    </ div>
  )
}

export default Diario