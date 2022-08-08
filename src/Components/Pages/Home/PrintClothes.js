import React, { useEffect, useState } from 'react';
import PrintClothe from './PrintClothe';

const PrintClothes = () => {
    const [printClothes, setPrintCloths] = useState('');

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setPrintCloths(data))
    }, [])

    return (
        <div>
            <h1 className='text-5xl mt-2 text-center font-bold'>Print Cloths </h1>
            <div className='sm:mx-16 lg:mx-36 p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4'>
                {
                    printClothes.map(showPrintClothe => <PrintClothe key={showPrintClothe._id} showPrintClothe={showPrintClothe}></PrintClothe>)
                }
            </div>
        </div>
    );
};

export default PrintClothes;