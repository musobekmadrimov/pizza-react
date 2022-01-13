import React from 'react'

export default function CardItem({product, changeQuantity}) {
    return (
        <div className='cartItem'>
            <img src={product.url} alt="Card Item" className="cartItemImage" />
            <div className='cartMain'>
                <div>
                    <p>{product.title}</p>
                    <span>UZS: {product.price}</span>
                </div>
                <div>
                    <p>Число: <span>{product.quantity}</span></p>
                    <div>
                        <button className='quantityBtn' onClick={() => changeQuantity(product, '-')}>-</button>
                        <button className='quantityBtn' onClick={() => changeQuantity(product, '+')}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
