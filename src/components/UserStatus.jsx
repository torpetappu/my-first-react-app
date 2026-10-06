export function UserStatus({username, role,disabled, onRoleClick}){
    return(
        <div>
            <p><strong>User:</strong>{username}</p>
            <button 
            disabled={disabled}
            onClick={()=>onRoleClick(username,role)}
            style={{
                backgroundColor: role === 'Admin' ? '#ff4d4f' : '#1890ff',
                color: disabled ? '#8c8c8c':'#fff',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: disabled? 'not-allowed':'pointer'

            }}
            >
                Role:{role}
            </button>
        </div>
    );
}