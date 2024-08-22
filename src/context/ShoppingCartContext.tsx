import  { createContext, ReactNode, useContext, useState } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import useLocalStorage from '../hooks/useLocalStorage';
type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    openCart :()=> void
    closeCart :()=> void
    getItemQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity : number
    cartItems : CardItem[];
}

type CardItem = {
    id: number,
    quantity: number
}

const shoppingCartContext = createContext<ShoppingCartContext | undefined>(undefined);


export function useShoppingCart() {
    const context = useContext(shoppingCartContext);
    if (!context) {
        throw new Error("useShoppingCart must be used within a ShoppingCartProvider");
    }
    return context;
}




export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CardItem[]>("Shopping-Cart",[]);
    const [isOpenCart, setOpenCart] = useState(false);
    

    const openCart =()=>{
        setOpenCart(true);
    }
    const closeCart =()=>{
        setOpenCart(false);
    }

    // const cartQuantity = cartItems.reduce((quantity, item) => {
    //     return quantity + item.quantity;
    // }, 0);
    const cartQuantity = cartItems.length;

    function getItemQuantity(id: number): number {
        console.log("TOTAL-ITEMSSSSSSSSS",cartItems.length, "iTEMSSS", cartItems)
        const item = cartItems.find((item) => item.id === id);
        return item ? item.quantity : 0;
    }
    
    
    
    function increaseQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            }
            else {
                return currItems.map((item) => {
                    if (item.id == id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    else {
                        return item;
                    }
                })
            }
        })
    }
    function decreaseQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity == 1) {
                return currItems.filter((item) => item.id !== id)
            }
            else {
                return currItems.map((item) => {
                    if (item.id == id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else {
                        return item;
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => currItems.filter(item => item.id !== id));
    }
    

    return (
        <shoppingCartContext.Provider value={{ openCart, closeCart, getItemQuantity, increaseQuantity, decreaseQuantity, removeFromCart,cartQuantity, cartItems }}>
            {children}
            <ShoppingCart isOpenCart={isOpenCart} />
        </shoppingCartContext.Provider>
    );
    
}
