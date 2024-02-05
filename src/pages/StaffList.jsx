import { useEffect } from 'react'
import { useAppContext } from '../contexts/AppContext'
import {useNavigate} from 'react-router-dom'

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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Start Date</th>
            {/* Autres en-têtes de colonnes */}
          </tr>
        </thead>
        <tbody>
          {employeesData.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.startDate}</td>
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
