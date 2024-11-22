import React, { useEffect, useState } from 'react'
import useHttp from '../hooks/use-http';

const ProductList = () => {
    const [products,setProducts]=useState([]);
    const {isLoading,error,sendRequst:fetchProducts}=useHttp();
    useEffect(()=>{
        const transformProducts=(productsObj)=>{
            const loadedProducts=[];
            for(const productKey in productsObj){
                loadedProducts.push({id:productKey,sku:productsObj[productKey].sku})
            }
            setProducts(loadedProducts);
        }
        fetchProducts(
            {url:'http://localhost:8080/api/products'},
            transformProducts
        )
    },[fetchProducts]);
    
  return (
    <>
    <h2 className='mt-3 mb-3'>Products</h2>
    <table className='table'>
        <thead className='table-dark'>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Units in Stock</th>
            </tr>
        </thead>
        <tbody>
            {products.map(e=>{
                return <tr key={e.id}>
                <td>javaScript</td>
                <td>{e.sku}</td>
                <td>288</td>
            </tr>
            })}
            
        </tbody>
    </table>
    </>
  )
}

export default ProductList