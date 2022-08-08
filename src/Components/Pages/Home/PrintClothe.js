import React from 'react';

const PrintClothe = ({ showPrintClothe }) => {
    // console.log(printClothee)
    const { img, name, price, model, availableProducts, description, rating } = showPrintClothe;
    return (
        <div class="card w-96 bg-base-100 shadow-xl border-4 border-blue-900 hover:border-orange-600">
            <figure className=''><img className='rounded-2xl h-80' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title font-extrabold">
                    {name}
                    <div class="badge badge-red-700 font-bold">NEW</div>
                </h2>
                <h2> <span className='font-bold'>Model :</span> {model}</h2>
                <h2> <span className='font-extrabold'>Price : </span>{price} Tk</h2>
                <h2> <span className='font-bold'>Available Products :font-</span> {availableProducts}</h2>
                <p>{description}</p>
                <div class="card-actions justify-between">
                    <button className='btn'>Details</button>
                    <button className='btn'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PrintClothe;