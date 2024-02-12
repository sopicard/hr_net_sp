import { useEffect, useState } from 'react'
import { useAppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Typography, TextField, IconButton, Box, MenuItem } from '@mui/material'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'

const formatDate = (date) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
  return new Date(date).toLocaleDateString('fr-FR', options)
}

const StaffList = () => {
  const { employeesData } = useAppContext()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [orderBy, setOrderBy] = useState('')
  const [order, setOrder] = useState('asc')

  useEffect(() => {}, [employeesData])

  const fields = [
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

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const sortedData = orderBy
    ? employeesData.slice().sort((a, b) => {
        if (order === 'asc') {
          return a[orderBy] < b[orderBy] ? -1 : 1
        } else {
          return b[orderBy] < a[orderBy] ? -1 : 1
        }
      })
    : employeesData

  const filteredData = sortedData.filter(employee => {
    return Object.values(employee).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <div>
      <main>
        <Typography variant="h4" gutterBottom>Current Employees</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <TextField
            className= "staff-list__search"
            label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            size="small"
          />
          <Box display="flex" flexDirection="rows" alignItems="center">
            <Typography variant="body2" component="span" mr={1}>
              Show
            </Typography>
            <TextField
              className="staff-list__select"
              select
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              variant="outlined"
              size="small"
            >
              {[10, 25, 50, 100].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <Typography variant="body2" component="span" ml={1}>
              entries
            </Typography>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {fields.map((field) => (
                  <TableCell key={field.name}>
                    <Box display="flex" alignItems="center">
                      {field.label}
                      <Box ml={1} display="flex" flexDirection="column" alignItems="center">
                        <IconButton disableRipple onClick={() => handleRequestSort(field.name)}>
                          {orderBy === field.name && order === 'asc' ? <ArrowDropUp sx={{ fontSize: 'medium', marginBottom: '-8px' }} color="primary" /> : <ArrowDropUp sx={{ fontSize: 'medium', marginBottom: '-8px' }} />}
                        </IconButton>
                        <IconButton disableRipple onClick={() => handleRequestSort(field.name)}>
                          {orderBy === field.name && order === 'desc' ? <ArrowDropDown sx={{ fontSize: 'medium', marginTop: '-8px' }} color="primary" /> : <ArrowDropDown sx={{ fontSize: 'medium', marginTop: '-8px' }} />}
                        </IconButton>
                      </Box>
                    </Box>
                  </TableCell>               
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee, index) => (
                <TableRow key={index}>
                  {fields.map((field) => (
                    <TableCell key={field.name}>{field.type === 'date' ? formatDate(employee[field.name]) : employee[field.name]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent="space-between" alignItems="center" pt={1} pl={2}>
          <Typography variant="body2" component="span">
            Showing {Math.min(page * rowsPerPage + 1, filteredData.length)} to {Math.min((page + 1) * rowsPerPage, filteredData.length)} of {filteredData.length} entries
          </Typography>
          <Box display="flex" alignItems="center">
            <Button 
              disabled={page === 0} 
              onClick={() => handleChangePage(null, page - 1)} 
              variant="outlined" color="primary" 
              className={`staff-list__pagination ${page === 0 ? 'current-page' : ''}`}
              >
                Previous
              </Button>
            <Box component="span" ml={2} mr={2}>
              Page {page + 1}
            </Box>
            <Button 
              disabled={page >= Math.ceil(filteredData.length / rowsPerPage) - 1} 
              onClick={() => handleChangePage(null, page + 1)} 
              variant="outlined" color="primary" 
              className={`staff-list__pagination ${page === Math.ceil(filteredData.length / rowsPerPage) - 1 ? 'current-page' : ''}`}
              >
                Next
            </Button>
          </Box>
        </Box>
        <Button className="staff-list__button" onClick={() => navigate('/')} variant="outlined" color="primary">Home</Button>
      </main>
    </div>
  )
}

export default StaffList
