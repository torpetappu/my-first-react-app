import {useState} from 'react';

const CATALOG=[
    {id:1, name:'Wireless Headphones', price:99},
    {id:2, name:'Mechanical Keyboard', price:120},
    {id:3, name:'Ergonomic Mouse', price:45},
];

export function ShoppingCart(){
    const [cart, setCart]=useState([]);

    // Handler: Add to cart or increment quantity
    const handleAddToCart=(item)=>{
        setCart((prevCart)=>{
            const existing=prevCart.find((cartItem)=>cartItem.id==item.id);
            if(existing){
                return prevCart.map((cartItem)=>
                    cartItem.id===item.id
                ? {...cartItem, quantity:cartItem.quantity+1}
                :cartItem
            
            );

            }
            return [...prevCart,{...item, quantity:1}]
        });
    };
    //Hander: Update quantity directly or remove if 0
    const handleUpdateQuantity=(id, newQuantity)=>{
        if(newQuantity <= 0){
            handleRemoveItem(id)
            return;

        }
        setCart((prevCart)=>
        prevCart.map((item)=>
        item.id===id ? {...item,quantity:newQuantity}:item
        ));
    };
    //Handler: Remove Item completely
    const handleRemoveItem=(id)=>{
        setCart((prevCart)=>prevCart.filter((item)=>item.id!=id));
    };
    //Derived State (No need for additional useState!)
    const totalCost=cart.reduce(
        (sum, item)=>sum+item.price*item.quantity,0
    );
    const totalItemCount=cart.reduce((sum,item)=>sum+item.quantity,0);

    return(
        <div style={{ border: '1px solid red', background:'grey', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Store Catalog</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {CATALOG.map((product) => (
          <button key={product.id} onClick={() => handleAddToCart(product)}>
            Add {product.name} (${product.price})
          </button>
        ))}
      </div>

      <h2>Your Cart ({totalItemCount} items)</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: '8px' }}>
                <strong>{item.name}</strong> - ${item.price} x {item.quantity}{' '}
                <button
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <button
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  style={{ marginLeft: '10px', color: 'red' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalCost}</h3>
        </div>
      )}
    </div>

    )

}
