import React from 'react';

function TransactionTable({ transactions }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TransactionTable;
