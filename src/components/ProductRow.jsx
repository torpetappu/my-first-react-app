// src/components/ProductRow.jsx
function ProductRow({product}){
    const nameStyle=product.inStock
    ?{color:'green'}
    :{color:'red', textDecoration:'line-through'};

    return(
        // table
        <tr>
            <td style={nameStyle}>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.inStock?'In Stock':'Out of Stock'}</td>
        </tr>
    );
}
export default ProductRow