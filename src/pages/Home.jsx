import InputText from '../components/InputText'
import InputDate from '../components/InputDate'
import InputSelect from '../components/InputSelect'
import InputNumber from '../components/InputNumber'
import Modal from 'react-ball-modal/src/components/Modal'
import { useAppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import { useState} from 'react'

const Home = () => {
  const { saveFormData } = useAppContext()
  const navigate = useNavigate()
  // Utilise un état local pour le formulaire en cours
  const [formState, setFormState] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Mise à jour des données du formulaire
  const handleChange = (fieldName, value) => {
    // Mise à jour du formulaire en cours
    setFormState({ ...formState, [fieldName]: value })
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  // Mise à jour des données dans le contexte et sauvegarde dans le localStorage
  const handleSubmit = (e) => {
    e.preventDefault()

    const existingData = JSON.parse(localStorage.getItem('employeesData')) || []
    const updatedData = [...existingData, formState]

    // Mise à jour des données dans le contexte
    saveFormData(formState)
    // Sauvegarde dans le localStorage
    localStorage.setItem('employeesData', JSON.stringify(updatedData))  
    // Réinitialise le formulaire après la soumission
    setFormState({})
    console.log('Form data submitted:', formState)
    setIsModalOpen(true)
  }  

  return (
    <div>
      <main>
        <h1 className='mainTitle'>HRnet</h1>
        <button className='button' onClick={() => navigate('/staff-list')} aria-label='View current employees button'>View current employees</button>
        <h2 className='subTitle'>Create Employee</h2>
        <form className='form' onSubmit={handleSubmit}>
          <InputText
            label='First Name'
            name='firstName'
            value={formState.firstName || ''}
            onChange={(fieldName, value) => handleChange(fieldName, value)}
            aria-label='First Name Input'
          />
          
          <InputText
            label='Last Name'
            name='lastName'
            value={formState.lastName || ''}
            onChange={(fieldName, value) => handleChange(fieldName, value)}
            aria-label='Last Name Input'
          />
          
          <InputDate
            label='Date of Birth'
            name='dateOfBirth'
            value={formState.dateOfBirth || ''}
            onChange={(fieldName, value) => handleChange(fieldName, value)}
            aria-label='Date of Birth Input'
          />
          <InputDate
            label='Start Date'
            name='startDate'
            value={formState.startDate || ''}
            onChange={(fieldName, value) => handleChange(fieldName, value)}
            aria-label='Start Date Input'
          />
          <fieldset className='form__fieldset'>
            <legend className='form__legend'>Address</legend>
            <InputText
              label='Street'
              name='street'
              value={formState.street || ''}
              onChange={(fieldName, value) => handleChange(fieldName, value)}
              aria-label='Street Input'
            />
            <InputText
              label='City'
              name='city'
              value={formState.city || ''}
              onChange={(fieldName, value) => handleChange(fieldName, value)}
              aria-label='City Input'
            />
            <InputSelect
              label='State'
              name='state'
              value={formState.state || ''}
              onChange={(fieldName, value) => handleChange(fieldName, value)}
              aria-label='State Input'
            />
            <InputNumber
              label='Zip Code'
              name='zipCode'
              value={formState.zipCode || ''}
              onChange={(fieldName, value) => handleChange(fieldName, value)}
              aria-label='Zip Code Input'
            />
            
          </fieldset>
            <InputSelect
              label='Department'
              name='department'
              value={formState.department || ''}
              onChange={(fieldName, value) => handleChange(fieldName, value)}
              aria-label='Department Input'
            />
          <button className='button' type='submit' aria-label='Save Button'>Save</button>
        </form>
        <div>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} message='Employee Created !' />
        </div>
      </main>
    </div>
  )
}

export default Home
