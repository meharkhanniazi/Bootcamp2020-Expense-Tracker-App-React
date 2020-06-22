import React, { useContext } from 'react';

// Importing Global Context
import {GlobalContext} from '../context/GlobalState';

//Importing Transaction Component
import { Transaction } from './Transaction';


export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>Transaction History</h3>

            {
            transactions.map( transaction => (
                
                    <Transaction  key = {transaction.id} transaction = {transaction}/>
                
            ))
            }
            
                
        </div>
    )
}
