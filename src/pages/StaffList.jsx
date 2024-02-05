import { useEffect } from 'react'
import { useAppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import FieldConfig from '../components/FieldConfig'

const formatDate = (date) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(date).toLocaleDateString('fr-FR', options);
}

const StaffList = () => {
  const { employeesData } = useAppContext()
  const navigate = useNavigate()

  useEffect(() => {}, [employeesData])

  return (
    <div>
      <main>
      <h2>Current Employees</h2>
      <table>
        <thead>
          <tr>
            {FieldConfig.map((field) => (
              <th key={field.name}>{field.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {employeesData.map((employee, index) => (
          <tr key={index}>
            {FieldConfig.map((field) => (
              <td key={field.name}>{field.type === 'date' ? formatDate(employee[field.name]) : employee[field.name]}</td>
            ))}
          </tr>
        ))}

        </tbody>
      </table>
      <button onClick={() => navigate('/')}>Home</button>
      </main>
    </div>
  )
}

export default StaffList
