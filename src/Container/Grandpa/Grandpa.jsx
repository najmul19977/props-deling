import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Mother from '../Mother/Mother';

import './Grandpa.css';

export const RingContext = createContext('Gold');
export const MonyContex = createContext(0);

const Grandpa = () => {
    const ring = 'dimond';
    const [mony, setMony] = useState(0)

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p><small>{mony}</small></p>
            <MonyContex.Provider value={[mony, setMony]}>
                <RingContext.Provider value='Golden Ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Mother ring={ring}></Mother>

                    </section>
                </RingContext.Provider>
            </MonyContex.Provider>
        </div>
    );
};

export default Grandpa;
