import React from 'react'

export default function CardItem({product, changeQuantity}) {
    return (
        <div className='cartItem'>
            <img src={product.url} alt="Card Item" className="cartItemImage" />
            <div className='cartMain'>
                <div>
                    <p className='itemTitle'>{product.title}</p>
                    <span className='cartPrice'>{product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} UZS</span>
                </div>
                <div>
                    <p className='itemQuantity'>Число: <span>{product.quantity}</span></p>
                    <div>
                        <button className='quantityBtn' onClick={() => changeQuantity(product, '-')}>-</button>
                        <button className='quantityBtn' onClick={() => changeQuantity(product, '+')}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
