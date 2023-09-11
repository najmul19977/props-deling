import React, { useContext } from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import './Father.css';
import { MonyContex, RingContext } from '../Grandpa/Grandpa';

const Father = ({ring}) => {
    const angti = useContext(RingContext);
    const [mony, setMony] = useContext(MonyContex);
    return (
        <div className='father'>
            <h2>Father</h2>
            <button onClick={() =>setMony(mony + 1000)}>Send 1000</button>
            <section className='flex'>
                <Myself ring={angti}>naeem</Myself>
                <Brother>nadim <p><small>{mony}</small></p></Brother>
                
            </section>
        </div>
    );
};

export default Father;