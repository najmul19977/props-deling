
import { useLoaderData } from 'react-router-dom';
import Shirt from '../Shirt/Shirt';
import './Home.css';

import Cart from '../Cart/Cart';
import { useState } from 'react';



const Home = () => {
    const tshirt = useLoaderData();
    const [cart,setCart] = useState([]);
   
    const handleAddToCart = shirt =>{
        //console.log(shirt);
        const exist = cart.find(item => item.id === shirt.id);
        if(exist){
            alert('allready added');

        }else{
            const newCart = [...cart,shirt];
            setCart(newCart);

        }
       
    }

    const removeFormCard = id =>{
        console.log(id);
        const remaining = cart.filter(ts =>ts.id !== id);
        setCart(remaining);
    }
    
    
    return (
        <div className='main-container'>
            
            <div className='shirt-container'>
                {
                    tshirt.map(shirt=><Shirt
                    key={shirt.id}
                    shirt={shirt}
                    handleAddToCart={handleAddToCart}
                   

                    ></Shirt>)
                }
            </div>
            <div>
                <Cart cart={cart}
                removeFormCard={removeFormCard}
                ></Cart>
            </div>
            
        </div>
    );
};

export default Home;
