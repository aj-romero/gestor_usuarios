import Input from './Input'
import Buttom from './Buttom'
import useFormulario from '../hooks/useFormulario'

const UserForm = ({submit}) =>{
  const [formulario, handleChange, reset ] = useFormulario({ name: '', lastname:'', email:'' })

  const handleSubmit = (e) =>{
    e.preventDefault()
    submit(formulario)
    reset()
  }
  return(
    <form onSubmit={handleSubmit}>
      <Input label='Nombre' name='name' value={formulario.name} onChange={handleChange} />
      <Input label='Apellido' name='lastname' value={formulario.lastname} onChange={handleChange} />
      <Input label='Correo' name='email' value={formulario.email} onChange={handleChange} />
      <Buttom>Enviar</Buttom>
    </form>
  )
}

export default UserForm
