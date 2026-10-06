import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

// import Greeting from './Greeting.jsx'
// import Button from './button.jsx'

import ProductTable from './components/ProductTable';
import { Card } from './components/Card';
import { UserStatus } from './components/UserStatus';

function App() {
  const [count, setCount] = useState(0)

  const INVENTORY=[
    {id:'p1', category:"Electronics", name:'Wireless Mouse', price: '$29.99',inStock:true},
    {id:'p2', category:"Electronics", name:'Mechanical Keyboard', price: '$89.99',inStock:false},
    {id:'p3', category:"Stationery", name:'Notebook', price: '$4.99',inStock:true}
  ]
  const groceries=[]

  const electronics=INVENTORY.filter(p=>p.category==='Electronics');
  const stationery=INVENTORY.filter(p=>p.category==='Stationery');
  

  const handleRoleAlert = (user, role) => {
    alert(`User ${user} has privileges of type: ${role}`);
  };


  return (
    <div>
      <h1>Store Inventory</h1>
      <ProductTable title='Electronics' products={electronics}/> 
      <ProductTable title='Stationery' products={stationery}/> 
      <ProductTable title='Groceries' products={groceries}/>
      <>
      <div style={{ padding: '20px' ,margin:'10px', border:'2px solid'}}>
      <h1>Team Members</h1>
      
      <Card title="Account Overview">
        <UserStatus 
          username="Alex" 
          role="Admin" 
          disabled={true}
          onRoleClick={handleRoleAlert} 
        />
      </Card>

      <Card title="Account Overview">
        <UserStatus 
          username="Taylor" 
          role="Developer" 
          onRoleClick={handleRoleAlert} 
        />
        <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
          Last active: 2 hours ago
        </p>
      </Card>
    </div>
      </>

    </div>
    );
  }
  export default App;