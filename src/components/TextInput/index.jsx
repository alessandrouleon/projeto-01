import './styles.css'

export const TextInput = ({handleChange, searchValue}) => {
    return (
        <input
        className="input-search"
        onChange={handleChange}
        value={searchValue}
        type="search" 
        placeholder="Type you search"
        />
        
    )
}