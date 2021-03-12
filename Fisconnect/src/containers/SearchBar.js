import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <form action="/" method="get">
            {/* <label htmlFor="header-search">
                <span className="visually-hidden">Search blog posts</span>
            </label> */}
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search Freelancers"
                name="s" 
            />
            <button type="submit">Search</button>
        </form>
    );
    
};

export default SearchBar;