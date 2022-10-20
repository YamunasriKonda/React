import propTypes from 'prop-types';

function SearchBar({ text, changeHandler }) {
    return (
        <input value={search} onChange={(e) => setSearch(e.target.value)} />

    );
}

SearchBar.propTypes = {
    text: propTypes.string.isRequired,
    changeHandler: propTypes.func.isRequired,

};


export default SearchBar;