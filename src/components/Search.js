import React, { useState } from 'react'

const Search = ({ searchPosts }) => {
    const [search, setSearch] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()

        searchPosts(search)
    }

    return (<form action="/" method="get" onSubmit={onSubmit}>
        <label htmlFor="header-search">
            <span >Search posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            value={search}
            placeholder="Search posts"
            onChange={(event) => setSearch(event.target.value)}
        />
        <input type="submit" className="submit" />
    </form>
    )
};

export default Search;