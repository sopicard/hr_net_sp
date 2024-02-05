import { createContext, useContext, useState, useEffect} from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState([])
  const [formData, setFormData] = useState({})

  // Charger les données depuis le localStorage au chargement de la page
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('employeeData')) || [];
    setEmployeeData(storedData)
  }, [])

  const saveFormData = (data) => {
    // Mettre à jour le contexte avec les nouvelles données
    setEmployeeData([...employeeData, data])
    setFormData(data)
  }
  
  return (
    <AppContext.Provider value={{ employeeData, formData, saveFormData }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
