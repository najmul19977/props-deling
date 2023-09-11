import React, { useContext } from 'react';
import { MonyContex } from '../Grandpa/Grandpa';

const Sister = ({children,ring}) => {
    const [mony,SetMony] = useContext(MonyContex);
    return (
        <div>
            <h2>Sister </h2>
            <small>{children,ring} <br />{mony} </small>
        </div>
    );
};

export default Sister;