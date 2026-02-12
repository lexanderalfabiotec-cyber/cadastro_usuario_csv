import { useState } from 'react'

function RegistrationForm({ onAddUser }) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [sex, setSex] = useState('')
    const [bloodType, setBloodType] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name.trim() || !age || !sex || !bloodType) {
            setError('Por favor, preencha todos os campos.')
            return
        }

        if (parseInt(age) <= 0) {
            setError('A idade deve ser um número positivo.')
            return
        }

        setError('')
        onAddUser({ name, age, sex, bloodType })
        setName('')
        setAge('')
        setSex('')
        setBloodType('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Ex: João Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="age">Idade</label>
                <input
                    id="age"
                    type="number"
                    placeholder="Ex: 25"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="sex">Sexo</label>
                <select
                    id="sex"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                >
                    <option value="">Selecione...</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="bloodType">Tipo Sanguíneo</label>
                <select
                    id="bloodType"
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                >
                    <option value="">Selecione...</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
            </div>
            {error && <p className="error-msg visible">{error}</p>}
            <button type="submit" className="btn-primary">Adicionar Usuário</button>
        </form>
    )
}

export default RegistrationForm
