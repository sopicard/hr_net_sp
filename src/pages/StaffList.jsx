import { useEffect } from 'react'
import { useAppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import FieldConfig from '../components/FieldConfig'

const StaffList = () => {
  const { employeesData } = useAppContext()
  const navigate = useNavigate()

  useEffect(() => {}, [employeesData])

  return (
    <div>
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
                <td key={field.name}>{employee[field.name]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  )
}

export default StaffList
