import Input from '../components/Input'
import { useAppContext } from '../contexts/AppContext'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const { formData, saveFormData } = useAppContext()
  const navigate = useNavigate()

  // Mise à jour des données du formulaire
  const handleChange = (fieldName, value) => {
    // Mise à jour des données dans le contexte
    saveFormData({ ...formData, [fieldName]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data submitted:', formData)
    alert('Employé créé')
  }

  return (
    <div>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Prénom" name="firstName" onChange={(value) => handleChange('firstName', value)} />
        <Input label="Nom" name="lastName" onChange={(value) => handleChange('lastName', value)} />
        {/* Ajoutez d'autres champs avec des composants Input et leurs fonctions onChange */}
        <button type="submit">Save</button>
      </form>
      <button onClick={() => navigate('/staff-list')}>View current employees</button>
    </div>
  )
}

export default Home
