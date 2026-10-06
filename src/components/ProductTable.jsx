//src/components/ProductTable.jsx
import ProductRow from "./ProductRow";

function ProductTable({products,title}){
    if(products.length===0){
        return <p>No Products available in {title}.</p>;
    }

    return(
        <div>
            <h3>{title}</h3>
            <table border='1' cellPadding="8" style={{borderCollapse:'collapse'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item)=>(
                        <ProductRow key={item.id} product={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ProductTable;