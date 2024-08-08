import React from 'react';

function TransactionForm({ transaction, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="description"
        value={transaction.description}
        onChange={onChange}
        placeholder="Description"
      />
      <input
        type="number"
        name="amount"
        value={transaction.amount}
        onChange={onChange}
        placeholder="Amount"
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
