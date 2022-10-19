import { useState } from 'react';
import SearchBar from './SearchBar';

function SearchableList() {
    const [items] = useState(["drinks", "eggs", "fruits"]);
    const [search, setSearch] = useState('');

    return (
        <div>

            <SearchBar text={search} changeHandler={(e) => setSearch(e.target.value)} />
            {
                items
                    .filter((item) => item.toLowercase().startsWith(search.toLowerCase()))
                    .map((item) => <p>{item}</p>)

            }
        </div>
    );
}

export default SearchableList;


