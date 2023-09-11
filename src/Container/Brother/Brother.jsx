import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = ({children}) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h2>Brother</h2>
            <p><small>{ring}</small></p>
            <small>{children}</small>
        </div>
    );
};

export default Brother;