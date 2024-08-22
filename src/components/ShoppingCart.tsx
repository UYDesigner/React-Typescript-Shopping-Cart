import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./cartItem"
import TotalAmount from "./TotalAmount";

type ShoppingCartProps = {
    isOpenCart: boolean
}

export default function ShoppingCart({ isOpenCart }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();
    return (
        <Offcanvas show={isOpenCart} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton >
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <hr />
            <Offcanvas.Body>
                <Stack gap={3}>
                    {
                        cartItems.map((item) => (
                            <CartItem key={item.id} {...item} />
                        ))
                    }
                </Stack>
                {cartItems.length > 0 ?
                    <TotalAmount />
                    :
                    <></>}
            </Offcanvas.Body>
        </Offcanvas>
    )
}
