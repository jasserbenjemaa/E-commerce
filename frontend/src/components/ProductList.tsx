import React from 'react'

const ProductList = () => {
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
            <tr>
                <td>javaScript</td>
                <td>80</td>
                <td>288</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default ProductList