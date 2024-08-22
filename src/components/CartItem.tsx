import { useShoppingCart } from "../context/ShoppingCartContext"
import StoreItems from "../../data/items.json"
import { Button, Stack } from "react-bootstrap";
import FormatCurrency from "../../utilities/FormatCurrency";
type cartItemProps = {
    id: number,
    quantity: number,
}

export default function cartItem({ id, quantity }: cartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = StoreItems.find(item => item.id === id)
    if (item == null) return null;
    return (
        <Stack
            direction="horizontal"
            gap={2}
            style={{
                border: "1px solid #c8ccc9",
                padding: '10px',
                borderRadius: 10,
                display: "flex",
                justifyContent: "space-between", // Changed from justifyItems to justifyContent
                // background: "#f5f7f6"
            }}
        >
            <img
                src={item.img}
                alt=""
                style={{
                    width: "180px",
                    objectFit: "contain",
                    height: "120px",
                    padding: '10px',
                    
                    flex: "1 1 0"
                }}
            />
            <div style={{ display: "flex", flexDirection: "column", marginRight: "auto", flex: "2 1 0" , justifyContent: "flex-end",alignItems: "flex-end", height:"120px" }}>
                <div >
                    {item.name}
                    {quantity > 1 && <span style={{fontSize:"10px", color:"#039645"}}> X {quantity}</span>}
                </div>
                <div>
                    {FormatCurrency(item.price)}
                    
                </div>
                <div style={{fontSize:'11px'}} >(incl. all Taxes)</div>
                <div>
                    <span style={{fontWeight:"bolder"}}>Total Price : </span> {FormatCurrency(quantity * item.price)}
                </div>
                <Button onClick={()=>removeFromCart(item.id)} style={{width:"50%", fontSize:"10px", background:"black", color:"white", fontWeight:400, border:"none" , bottom:'0', marginTop:"8px"}} >Remove Item</Button>
            </div>
        </Stack>

    )
}
