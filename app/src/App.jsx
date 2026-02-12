import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([])

  const handleAddUser = (user) => {
    setUsers([...users, user])
  }

  const handleExportCSV = () => {
    if (users.length === 0) return

    const headers = ['Nome', 'Idade', 'Sexo', 'Tipo Sanguíneo']
    const csvRows = [
      headers.join(','),
      ...users.map(user => `${user.name},${user.age},${user.sex},${user.bloodType}`)
    ]
    const csvContent = csvRows.join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', 'usuarios_cadastrados.csv')
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="card">
      <h1>Registro & Exportação</h1>

      <RegistrationForm onAddUser={handleAddUser} />

      <UserList users={users} />

      {users.length > 0 && (
        <button onClick={handleExportCSV} className="btn-success">
          Exportar para CSV
        </button>
      )}
    </div>
  )
}

export default App
