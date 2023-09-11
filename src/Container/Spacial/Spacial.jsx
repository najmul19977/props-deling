import React, { useContext } from 'react';
import { MonyContex } from '../Grandpa/Grandpa';

const Spacial = ({ring}) => {
    const [mony,SetMony] = useContext(MonyContex);
    return (
        <div>
            <h2>Spacial</h2>
            <p><small>{ring} <br />{mony}</small></p>
        </div>
    );
};

export default Spacial;