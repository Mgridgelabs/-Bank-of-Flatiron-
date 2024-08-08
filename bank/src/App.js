import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';
import SearchBar from './components/SearchBar';
import './App.css';


const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTransaction, setNewTransaction] = useState({ description: '', amount: '' });
  const [filteredTransactions, setFilteredTransactions] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3001/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(data);
      });
  }, []);


  const handleSearchChange = (e) => setSearchTerm(e.target.value);


  const handleSearch = () => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };


  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
    setNewTransaction({ description: '', amount: '' });
  };


  return (
    <div className="container">
      <h1>Bank Transactions</h1>
      <SearchBar value={searchTerm} onChange={handleSearchChange} onSearch={handleSearch} />
      <TransactionTable transactions={filteredTransactions} />
      <TransactionForm
        transaction={newTransaction}
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};


export default App;

