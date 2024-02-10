const FieldConfig = [
    { label: 'First Name', name: 'firstName', type: 'text' },
    { label: 'Last Name', name: 'lastName', type: 'text' },
    { label: 'Date of Birth', name: 'dateOfBirth', type: 'date' },
    { label: 'Start Date', name: 'startDate', type: 'date' },
    { label: 'Street', name: 'street', type: 'text' }, 
    { label: 'City', name: 'city', type: 'text' }, 
    { label: 'State', name: 'state', type: 'select' },
    { label: 'Zip Code', name: 'zipCode', type: 'text' },
    { label: 'Department', name: 'department', type: 'select' },
  ]
  
export default FieldConfig


          // {/* Fieldset Address */}
          // <fieldset>
          //   <legend>Address</legend>
          //   {/* Champs street, city, state, zipCode */}
          //   {['street', 'city', 'state', 'zipCode'].map(fieldName => (
          //     <Input
          //       key={fieldName}
          //       label={FieldConfig.find(field => field.name === fieldName).label}
          //       name={fieldName}
          //       type={FieldConfig.find(field => field.name === fieldName).type}
          //       value={formState[fieldName] || ''}
          //       onChange={(fieldName, value) => handleChange(fieldName, value)}
          //     />
          //   ))}
          // </fieldset>
  




