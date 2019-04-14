import React from 'react';

const SearchBox = ({changeSearch, searchfield}) => {
    return(
        <div className="pa3">
            <input
                className="pa2 ba b--blue bg-lightest-blue"
                type="search"
                placeholder="Search players"
                onChange={changeSearch}
            />
        </div>
    );
};

export default SearchBox;
