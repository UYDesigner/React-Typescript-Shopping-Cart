// import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import StoreItems from "../../data/items.json"
import FormatCurrency from '../../utilities/FormatCurrency';
export default function TotalAmount() {
    const { cartQuantity, cartItems } = useShoppingCart();
    // const item = null;
    return (
        <div style={{
            marginTop: "20px", marginBottom: "20px", border: "1px solid #c8ccc9",
            padding: '10px',
            borderRadius: 10,
        }}>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>Order Summary({cartQuantity} items)</div>
            <div style={{ marginTop: "10px" }}>
            {cartItems.map(cartItem => {
                    const item = StoreItems.find(storeItem => storeItem.id === cartItem.id);
                    return item ? (
                        <div key={item.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                            <div>
                                {item.name}
                            </div>
                            <div className="price">
                                {FormatCurrency(item.price)} 
                                <span style={{fontSize:"12px", color:"#039645"}}> x {cartItem.quantity}</span>
                            </div>
                        </div>
                    ) : null;
                })}
            </div>
            <div style={{ marginTop: '10px', fontSize: "16px", fontWeight: 400, background: "black", color: "white", padding: "5px", paddingLeft: "10px", borderRadius: '5px', display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div  >Net Amount : </div>
                <div>
                    {FormatCurrency(cartItems.reduce((total, cartItem) => {
                        const item = StoreItems.find(item => item.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity;
                    }, 0))}
                </div>
            </div>
        </div>
    )
}
