import React from 'react';

function SearchBar({ value, onChange, onSearch }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Search transactions"
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
