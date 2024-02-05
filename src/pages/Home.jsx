import Input from '../components/Input'
import FieldConfig from '../components/FieldConfig'
import { useAppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import { useState} from 'react'

const Home = () => {
  const { saveFormData } = useAppContext()
  const navigate = useNavigate()

  // Utilise un état local pour le formulaire en cours
  const [formState, setFormState] = useState({})

  // Mise à jour des données du formulaire
  const handleChange = (fieldName, value) => {
    // Mise à jour du formulaire en cours
    setFormState({ ...formState, [fieldName]: value })
  }

  // Mise à jour des données dans le contexte et sauvegarde dans le localStorage
  const handleSubmit = (e) => {
    e.preventDefault()

    // Enregistre dans le localStorage uniquement si le formulaire est complet
    if (formState.firstName && formState.lastName) {
      const existingData = JSON.parse(localStorage.getItem('employeesData')) || []
      const updatedData = [...existingData, formState]

      // Mise à jour des données dans le contexte
      saveFormData(formState)

      // Sauvegarde dans le localStorage
      localStorage.setItem('employeesData', JSON.stringify(updatedData))
      
      // Réinitialise le formulaire après la soumission
      setFormState({})
      console.log('Form data submitted:', formState)

      alert('Employee Created !')
    }
  }  
  return (
    <div>
      <main>
        <h1>HRnet</h1>
        <button onClick={() => navigate('/staff-list')}>View current employees</button>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit}>
          {FieldConfig.map((field) => (
            <Input
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              value={formState[field.name] || ''}
              onChange={(fieldName, value) => handleChange(fieldName, value)}
            />
          ))}
          <button type="submit">Save</button>
        </form>
      </main>
    </div>
  )
}

export default Home
