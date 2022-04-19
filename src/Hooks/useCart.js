import { useEffect, useState } from 'react';
import { getStoredCart } from '../Pages/Utilities/fakeDb';

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        const storedCart = getStoredCart();
        console.log(storedCart);
        const savedCart = [];
        for(let id in storedCart){
            const addedProduct = products.find(product => product.id === parseInt(id));
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);
    
    return [cart, setCart];
}

export default useCart;