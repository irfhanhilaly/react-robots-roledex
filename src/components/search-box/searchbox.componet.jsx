import './search-box.styles.css';

export const SearchBox = (props) => {
    return (
        <input type="search" placeholder="Search Robots"
            onChange={props.handleClick}
        />)
}