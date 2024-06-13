import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Components/Context/StoreContext'
function PlaceOrder() {
    const { getTotalCartAmount } = useContext(StoreContext);
    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information.</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First Name...' />
                    <input type="text" placeholder='Last Name....' />
                </div>
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Street...' />
                <div className="multi-fields">
                    <input type="text" placeholder='City...' />
                    <input type="text" placeholder='State....' />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Zip Code...' />
                    <input type="text" placeholder='Country....' />
                </div>
                <input type="tel" placeholder='Phone Number...' />

            </div>
            <div className="place-order-right">
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
                    <button>Proceed To Payment.</button>
                </div>
            </div>

        </form>
    )
}

export default PlaceOrder