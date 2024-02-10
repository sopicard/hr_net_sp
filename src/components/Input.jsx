import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import StatesList from './StatesList'

const Input = ({ label, name, type, value, onChange }) => {
  const handleChange = (e) => {
    let newValue = e.target.value

    if (type === 'number') {
      // Supprimer tout ce qui n'est pas un chiffre
      newValue = newValue.replace(/\D/g, '')
    }
    onChange(name, newValue)
  }

  return (
    <div className='input-wrapper'>
      <label>{label}</label>
      {type === 'date' ? (
        <DatePicker selected={value} onChange={(date) => onChange(name, date)} />
      ) : type === 'select' ? (
        <select name={name} value={value} onChange={handleChange}>
          <option value="">Select State</option>
          {StatesList.map((state) => (
            <option key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          value={value} 
          onChange={handleChange} 
        />
      )}
    </div>
  )
}

export default Input