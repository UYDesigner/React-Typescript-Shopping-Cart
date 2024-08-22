import { Button, Card } from "react-bootstrap"
import "./StoreItemcss.css"
import FormatCurrency from "../../utilities/FormatCurrency"
import { CgShoppingCart } from "react-icons/cg";
import { useShoppingCart } from "../context/ShoppingCartContext";
// import { useState } from "react";

type StoreItemsProps = {
    id: number,
    name: string,
    price: number,
    img: string
}

export default function StoreItem({ id, name, price, img }: StoreItemsProps) {
    const { getItemQuantity, increaseQuantity, decreaseQuantity, removeFromCart } = useShoppingCart();
    const quantity = getItemQuantity(id);
    return (
        <div style={{ width: "350px" }}>
            <div className="card-container" >
                <Card
                    style={{ overflow: 'hidden', alignContent: "center", justifyContent: "center", padding: "20px", cursor: 'pointer', width: "350px" }}
                    key={id}
                >
                    <Card.Img
                        variant="top"
                        src={img}
                        height="300px"
                        // width="200px"
                        style={{
                            objectFit: 'contain',
                            // aspectRatio: 3 / 2,
                            // mixBlendMode:"color-burn"

                        }}
                    />
                </Card>
                <div className="inner-card-hover ">
                    {/* <h1>{id}</h1> */}
                    <h5>{name}</h5>
                    <h5>{FormatCurrency(price)}</h5>
                </div>
            </div>
            <div className=" d-flex align-items-center justify-content-center " style={{
                borderColor: "#bfbfbf",
                borderWidth: "1px",
                borderStyle: "solid"
            }}>
                {quantity === 0 ?
                    <Button style={{ width: "50%", height: "50px", background: "black", border: "none", borderRadius: '0' }} onClick={()=>increaseQuantity(id)}>+Add To Cart

                    </Button>
                    :
                    <>
                        <div className="plusminus" style={{
                            width: "50%", height: "50px", border: "none", borderRadius: '0', display: "flex", alignItems: "center", justifyContent: "space-between",

                            paddingLeft: "30px", paddingRight: "30px"
                        }}>
                            <div className="plus " style={{ fontSize: '32px', cursor: "pointer" }} onClick={()=>increaseQuantity(id)}>
                                +
                            </div>
                            <span style={{ fontSize: '32px' }}>{quantity}</span>
                            <div className="minus" style={{ fontSize: '45px', cursor: "pointer" }} onClick={()=>decreaseQuantity(id)}>
                                -
                            </div>
                        </div>
                    </>
                }
                <div className="btn-to-cart" style={{ background: "#cccfcd", width: "50%", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px" }}>
                    < CgShoppingCart />
                </div>
            </div>
        </div>
    )
}
