const InputNumber = ({ label, name, value, onChange }) => {
    const handleChange = (e) => {
      onChange(name, e.target.value)
    }
  
    return (
      <div className='form__input-wrapper'>
        <label className='form__label'>{label}</label>
        <input className='form__input' name={name} type="number" value={value} onChange={handleChange} />
      </div>
    )
  }
  
export default InputNumber
  