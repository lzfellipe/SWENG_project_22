import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <Form bg="dark" action="/" method="get">
            {/* <label htmlFor="header-search">
                <span className="visually-hidden">Search blog posts</span>
            </label> */}
            <Form.Control
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search Freelancers"
                name="s" 
            />
            {/* <Button type="submit">Search</Button> */}
        </Form>
    );
    
};

export default SearchBar;