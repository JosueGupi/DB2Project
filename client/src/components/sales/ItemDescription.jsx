import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export function ItemDescription({item}){



    return (
        <div className="col">
            <div className="card">
                    <div class="card-body">
                        <p className ="card-text">ID: {item.idWhisky} Whisky: {item.whisky}</p>
                        <p className ="card-text">Quantity: {item.quantity} Price: {item.price}</p>
                    </div>
            </div>
        </div>
    )
}
