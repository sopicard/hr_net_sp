import InputText from '../components/InputText'
import InputDate from '../components/InputDate'
import InputSelect from '../components/InputSelect'
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
    // Vérifie si les champs firstName et lastName sont remplis
    if (!formState.firstName || !formState.lastName) {
      alert('Please enter both first name and last name.');
      return
    }
    // Vérifie si le code postal ne contient que des chiffres après le filtrage
    if (formState.zipCode && !/^\d+$/.test(formState.zipCode)) {
      alert('Please enter a valid zip code containing only numbers.')
      // Arrête la soumission du formulaire si le code postal n'est pas valide
      return 
    }

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

  return (
    <div>
      <main>
        <h1 className='mainTitle'>HRnet</h1>
        <button className='button' onClick={() => navigate('/staff-list')}>View current employees</button>
        <h2 className='subTitle'>Create Employee</h2>
        <form className='form' onSubmit={handleSubmit}>
          <InputText
            label="First Name *"
            name="firstName"
            value={formState.firstName || ''}
            onChange={(fieldName, value) => handleChange(fieldName, value)}
          />
          <InputText
            label="Last Name *"
            name="lastName"
            value={formState.lastName || ''}
            onChange={(fieldName, value) => handleChange(fieldName, value)}
          />
          <InputDate
            label="Date of Birth"
            name="dateOfBirth"
            value={formState.dateOfBirth || ''}
            onChange={(fieldName, value) => handleChange(fieldName, value)}
          />
          <InputDate
            label="Start Date"
            name="startDate"
            value={formState.startDate || ''}
            onChange={(fieldName, value) => handleChange(fieldName, value)}
          />
          <fieldset className='form__fieldset'>
            <legend className='form__legend'>Address</legend>
            <InputText
              label="Street"
              name="street"
              value={formState.street || ''}
              onChange={(fieldName, value) => handleChange(fieldName, value)}
            />
            <InputText
              label="City"
              name="city"
              value={formState.city || ''}
              onChange={(fieldName, value) => handleChange(fieldName, value)}
            />
            <InputSelect
              label="State"
              name="state"
              value={formState.state || ''}
              onChange={(fieldName, value) => handleChange(fieldName, value)}
            />
            <InputText
              label="Zip Code"
              name="zipCode"
              value={formState.zipCode || ''}
              onChange={(fieldName, value) => handleChange(fieldName, value)}
            />
          </fieldset>
            <InputSelect
              label="Department"
              name="department"
              value={formState.department || ''}
              onChange={(fieldName, value) => handleChange(fieldName, value)}
            />
          <button className='button' type="submit">Save</button>
        </form>
      </main>
    </div>
  )
}

export default Home
