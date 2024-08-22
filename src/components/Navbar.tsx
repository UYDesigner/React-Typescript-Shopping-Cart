import { Container, Nav, Button } from "react-bootstrap";
import { Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { CgShoppingCart } from "react-icons/cg";
import { useShoppingCart } from "../context/ShoppingCartContext";



export default function Navbar() {

    const { cartQuantity, openCart } = useShoppingCart();

    return (
        <>
            <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
                <Container className="me-auto">
                    <Nav>

                        <Nav.Link to="/" as={NavLink}><h5>Home</h5>
                        </Nav.Link>
                        <Nav.Link to="/store" as={NavLink}><h5>Store</h5>
                        </Nav.Link>
                        <Nav.Link to="/About" as={NavLink}><h5>About</h5>
                        </Nav.Link>
                    </Nav>
                    {
                        cartQuantity > 0 &&
                    <Button
                        onClick={openCart}
                        style={{ width: " 3rem", height: "3rem", alignItems: "center", justifyContent: "center", position: "relative" }}
                        variant="outline-primary"
                        className="rounded-circle">
                        <CgShoppingCart className="fs-4  " />
                        <div style={{ background: "black", borderRadius: 50, position: "absolute", width: "1.6rem", height: "1.6rem", color: "white", bottom: '0', right: '0', transform: "translate(25%, 25%)" }}
                            className="d-flex justify-content-center align-items-center"
                        >
                            {cartQuantity}
                        </div>
                    </Button>}
                </Container>
            </NavbarBs>
        </>
    )
}
