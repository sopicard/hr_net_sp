import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import StaffList from './pages/StaffList'

const AppRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff-list" element={<StaffList />} />
      </Routes>
    )
  }
  
  export default AppRouter