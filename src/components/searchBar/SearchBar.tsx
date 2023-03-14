import React from 'react';

import './SearchBar.scss';

type SearchBarProps = {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

const SearchBar = ({searchTerm, setSearchTerm}: SearchBarProps) => { 

    return (
        <div className="searchBar">
            <input 
                className="searchBar__input" 
                type="text" 
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default SearchBar;