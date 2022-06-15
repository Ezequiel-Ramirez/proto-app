import React from 'react'
import { Link } from "react-router-dom";
const Item = ({product}) => {
    return (
        <div class="card" style={{width: '18rem'}}>
            <img class="card-img-top" src={product.image} alt={product.title}/>
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">{product.description}</p>
            <Link to={`/producto/${product.id}`} class="btn btn-primary">Ver más</Link>
        </div>
      </div>

    )
}

export default Item