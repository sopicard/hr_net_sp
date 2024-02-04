import { useAppContext } from '../contexts/AppContext'

const Input = ({ label, name }) => {
  const { formData, saveFormData } = useAppContext()

  const handleChange = (e) => {
    const newData = { ...formData, [name]: e.target.value }
    saveFormData(newData)
  };

  return (
    <div>
      <label>{label}</label>
      <input type="text" value={formData[name] || ''} onChange={handleChange} />
    </div>
  )
}

export default Input
