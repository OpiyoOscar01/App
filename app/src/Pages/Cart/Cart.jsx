import React from 'react'
import './Cart.css'
import { StoreContext } from '../../Components/Context/StoreContext'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
function Cart() {

    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className='cart'>
            <di className="cart-items"></di>
            <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />
            {
                food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div>
                                <div className="cart-items-title cart-items-item">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>Ugx {item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>Ugx {item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                                </div>

                                <hr />
                            </div>
                        );
                    }
                })
            }
            <div className='cart-bottom'>
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-totals-details">
                            <p>SubTotal</p>
                            <p>Ugx {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-totals-details">
                            <p>Delivery Fee</p>
                            <p>Ugx {getTotalCartAmount() === 0 ? 0 : 2000}</p>
                        </div>
                        <hr />
                        <div className="cart-totals-details">
                            <b>Total</b>
                            <b >Ugx {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2000}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')} >Proceed To Check Out.</button>
                </div>
                <div className="cart-promo-code">
                    <div>
                        <p>If you have a Promo Code,Enter it here:</p>
                        <div className="cart-promo-code-input">
                            <input type="text" placeholder='Promo Code....' />
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Cart