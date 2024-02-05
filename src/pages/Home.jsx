import Input from '../components/Input'
import { useAppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import { useState} from 'react'

const Home = () => {
  const { saveFormData } = useAppContext()
  const navigate = useNavigate()

  // Utilise un état local pour le formulaire en cours
  const [formState, setFormState] = useState({ firstName: '', lastName: '' })

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
      // Mise à jour des données dans le contexte
      saveFormData(formState)

      const existingData = JSON.parse(localStorage.getItem('employeeData')) || []
      const updatedData = [...existingData, formState]
      localStorage.setItem('employeeData', JSON.stringify(updatedData))
      
      console.log('Form data submitted:', formState)
      alert('Employé créé')

      // Réinitialise le formulaire après la soumission
      setFormState({ firstName: '', lastName: '' })
    }
  }  
  return (
    <div>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Prénom" name="firstName" value={formState.firstName} onChange={(value) => handleChange('firstName', value)} />
        <Input label="Nom" name="lastName" value={formState.lastName} onChange={(value) => handleChange('lastName', value)} />
        {/* Ajoutez d'autres champs avec des composants Input et leurs fonctions onChange */}
        <button type="submit">Save</button>
      </form>
      <button onClick={() => navigate('/staff-list')}>View current employees</button>
    </div>
  )
}

export default Home
