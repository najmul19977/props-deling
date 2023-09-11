import React from 'react';
import Spacial from '../Spacial/Spacial';

const Myself = ({children,ring}) => {
    return (
        <div>
            <h2>Myself</h2>
            <small>{children}</small>
            <section>
                <Spacial ring={ring}></Spacial>
            </section>
        </div>
    );
};

export default Myself;