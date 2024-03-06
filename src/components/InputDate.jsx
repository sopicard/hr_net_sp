import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const InputDate = ({ label, name, value, onChange }) => {
    return (
      <div className='form__input-wrapper'>
        <label className='form__label' htmlFor={name}>{label}</label>
        <DatePicker 
          className='form__input'  
          selected={value} 
          onChange={(date) => onChange(name, date)}
          aria-label={label}
          id={name}
        />
      </div>
    )
  }
  
  export default InputDate