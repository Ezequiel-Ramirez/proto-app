import React from 'react'
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {

    return (
        <div className="card text-center">
            <div className="card-header">
                {product.category}
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <img src={product.image} alt={product.title} />
                <p className="card-text">{product.description}</p>
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
            <div className="card-footer text-muted">
                ${product.price}
            </div>
        </div>

    )
}

export default ItemDetail