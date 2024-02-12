import StatesList from './StatesList'

const InputSelect = ({ label, name, value, onChange }) => {
  const handleChange = (e) => {
    onChange(name, e.target.value)
  }

  const options =
    name === 'state'
      ? StatesList.map((state) => (
          <option key={state.abbreviation} value={state.abbreviation}>
            {state.name}
          </option>
        ))
      : name === 'department'
      ? [
          'Sales',
          'Marketing',
          'Engineering',
          'Human Resources',
          'Legal'
        ].map((department) => (
          <option key={department} value={department}>
            {department}
          </option>
        ))
      : null

  return (
    <div className='form__input-wrapper'>
      <label className='form__label' >{label}</label>
      <select className='form__select' name={name} value={value} onChange={handleChange}>
        <option value=''>{`Select ${label}`}</option>
        {options}
      </select>
    </div>
  )
}

export default InputSelect
