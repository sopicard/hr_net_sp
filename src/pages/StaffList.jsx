import { useEffect } from 'react'
import { useAppContext } from '../contexts/AppContext'
import {useNavigate} from 'react-router-dom'

const StaffList = () => {
  const { employeeData } = useAppContext()
  const navigate = useNavigate()

  useEffect(() => {}, [employeeData])

  return (
    <div>
      <h2>Current Employees</h2>
      <table>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            {/* Autres en-têtes de colonnes */}
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              {/* Autres cellules de tableau */}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  )
}

export default StaffList
