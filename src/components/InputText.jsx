const InputText = ({ label, name, value, onChange }) => {
    const handleChange = (e) => {
      onChange(name, e.target.value)
    }
  
    return (
      <div className="input-wrapper">
        <label>{label}</label>
        <input name={name} type="text" value={value} onChange={handleChange} />
      </div>
    )
  }
  
  export default InputText