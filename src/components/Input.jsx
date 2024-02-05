import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const Input = ({ label, name, type, value, onChange }) => {
  const handleChange = (date) => {
    onChange(name, date)
  }

  return (
    <div className='input-wrapper'>
      <label>{label}</label>
      {type === 'date' ? (
        <DatePicker selected={value} onChange={handleChange} />
      ) : (
        <input name={name} type="text" value={value} onChange={(event) => onChange(name, event.target.value)} />
      )}
    </div>
  )
}

export default Input