function UserList({ users }) {
    if (users.length === 0) {
        return (
            <div className="user-list" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                Nenhum usuário cadastrado ainda.
            </div>
        )
    }

    return (
        <div className="user-list">
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                Usuários Cadastrados ({users.length})
            </h2>
            {users.map((user, index) => (
                <div key={index} className="user-item">
                    <span style={{ fontWeight: '600' }}>{user.name}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{user.age} anos</span>
                    <span style={{ color: 'var(--text-muted)' }}> - {user.sex}</span>
                    <span style={{ color: 'var(--text-muted)' }}> - {user.bloodType}</span>
                    {user.timestamp && (
                        <span style={{ color: 'var(--text-muted)', marginLeft: '1rem' }}>
                            - {user.timestamp}
                        </span>
                    )}
                </div>
            ))}
        </div>
    )
}

export default UserList
