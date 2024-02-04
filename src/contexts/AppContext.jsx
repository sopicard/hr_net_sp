import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState({})

  const saveFormData = (data) => {
    setFormData(data)
  }

  return (
    <AppContext.Provider value={{ formData, saveFormData }}>
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
