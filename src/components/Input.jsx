const Input = ({ label, name, value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div>
      <label>{label}</label>
      <input name= {name} type="text" value={value} onChange={handleChange} />
    </div>
  )
}

export default Input
