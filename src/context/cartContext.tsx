// import { View, Text, ImageSourcePropType } from 'react-native'
// import React, { createContext, ReactNode, useContext, useState } from 'react'

// type ItemAdd ={
//     image:ImageSourcePropType,
//     label:any,
//     cost:any,
// }
// type cartContextType ={
//     cartItems:ItemAdd[],
//     setCartItems: React.Dispatch<React.SetStateAction<ItemAdd[]>>
// }

// const CartContext = createContext<cartContextType | undefined>(undefined);

// export const CartProvider = ({children}:{children: React.ReactNode}) => {
//     const [cartItems, setCartItems] = useState<ItemAdd[]>([]);
//   return ( 
//     <CartContext.Provider value={{cartItems,setCartItems}}>
//         {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart =()=>{
//     const context = useContext(CartContext);
//     if(!context){
//         throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
// }

import { View, Text, ImageSourcePropType } from 'react-native'
import React, { Children, createContext, useContext, useState } from 'react'

type ItemAdd ={
    image:ImageSourcePropType;
    label:any;
    cost:any;
}
type cartcontextType ={
    cartItems:ItemAdd[],
    setCartItems:React.Dispatch<React.SetStateAction<ItemAdd[]>>
}

const cartContext = createContext<cartcontextType | undefined >(undefined)
export const CartProvider = ({children}:{children: React.ReactNode}) => {
    const [cartItems,setCartItems] = useState<ItemAdd[]>([])
  return (
        <cartContext.Provider value={{cartItems,setCartItems}}>
            {children}
        </cartContext.Provider>
  )
}


export const useCart = ()=>{
    const context = useContext(cartContext);
    if(!context){
        throw("error")
    }
    return context
}