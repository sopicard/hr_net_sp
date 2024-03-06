const InputNumber = ({ label, name, value, onChange }) => {
    const handleChange = (e) => {
      onChange(name, e.target.value)
    }
  
    return (
      <div className='form__input-wrapper'>
        <label className='form__label' htmlFor={name}>{label}</label>
        <input 
          className='form__input' 
          name={name} 
          type='number' 
          value={value} 
          onChange={handleChange} 
          aria-label={label}
          id={name}
        />
      </div>
    )
  }
  
export default InputNumber
  