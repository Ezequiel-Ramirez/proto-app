import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [productSelected, setProductSelected] = useState({})

    const params = useParams()
 

    useEffect(() => {
        if(params.id){
            fetch(`https://fakestoreapi.com/products/${params.id}`)
                .then(res=>res.json())
                .then(json=>setProductSelected(json))
                .catch(err=>console.log(err))
        }
    }, [params.id])
    
    console.log(productSelected)
  return (
    <ItemDetail product={productSelected} />
  )
}

export default ItemDetailContainer