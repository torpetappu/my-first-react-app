import {useState,useEffect} from 'react';

const UserSearch=()=>{
    const [users,setUsers]=useState([]);
    const [searchTerm, setSearchTerm]=useState('');
    const [loading,setLoading]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=>{
        const fetchUsers=async()=>{
            try{
                setLoading(true)
                const response= await fetch('https://jsonplaceholder.typicode.com/users');
                // https://omitnomis.github.io/ShareSansarScraper/preview.html?date=2026_10_02
                
                if(!response.ok) 
                    throw new Error('Failed to fetch data')
                const data= await response.json();
                console.log(data)
                setUsers(data);
              }catch(err){
                setError(err.message);
              }finally{
                setLoading(false);
              }
        };
        fetchUsers();

    },[]); //Empty dependancy array mean run once on mount
    //filter user based on query
    const filteredUsers= users.filter((user)=>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (loading) return <p>Loading users...</p>
    if (error) return <p style={{color:'red'}}> Error: {error}</p>;

    return(
        <div style={{padding:'20px',background:"black",color:"white"}}>Code goes here
        <h2 style={{color:"white"}}>Directory Search</h2>
        <input
        type="text"
        placeholder="Search by name ..."
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        style={{padding:'8px', width:'250px',marginBottom:'15px'}}
        />
        feedback:<input style={{color:'white'}}type="range" size='2' name='feedback' min='1' max='5'/>
        <ol reversed>
            {filteredUsers.map((user)=>(
                <li key={user.id}>
                    <strong>{user.name}</strong>-{user.email}({user.company.name})
                </li>
            ))}
        </ol>
        
        </div>
    )

}
export default UserSearch