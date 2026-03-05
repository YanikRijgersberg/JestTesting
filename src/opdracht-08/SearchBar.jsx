import { useState } from 'react';

/**
 * Een zoekbalk component
 */
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Zoek..."
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm && (
        <button onClick={handleClear}>Wissen</button>
      )}
      {searchTerm && (
        <p>Zoeken naar: {searchTerm}</p>
      )}
    </div>
  );
}

export default SearchBar;
