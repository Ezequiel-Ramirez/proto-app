import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .catch(err=>console.log(err))
    }, [])
 

  return (
    <ItemList products={products} />
  )
}

export default ItemListContainer