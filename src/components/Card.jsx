export function Card({title,children}){
    return(
        <div style={{
            border: '1px solid #ccc',
            borderRadius:'8px',
            padding:'16px',
            maxWidth:'300px',
            margin:'10px 0',
            boxShadow:'0 2px 4px rgba(0,0,0,0.1)'
        }}>
            {title && <h2 style={{marginTop:0 }}>{title}</h2>}
            <div style={{border: "1px solid red"}}>{children}</div>


        </div>
    );
}