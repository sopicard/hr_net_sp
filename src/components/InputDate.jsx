import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const InputDate = ({ label, name, value, onChange }) => {
    return (
      <div className="input-wrapper">
        <label>{label}</label>
        <DatePicker selected={value} onChange={(date) => onChange(name, date)} />
      </div>
    )
  }
  
  export default InputDate