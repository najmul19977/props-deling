import React, { Children } from 'react';
import Sister from '../Sister/Sister';

const Mother = ({ring}) => {
    return (
        <div>
            <h2>Mother</h2>
            <section>
                <Sister ring={ring}>nadia</Sister>
            </section>
        </div>
    );
};

export default Mother;