const SearchForm = ({ onSearch, onFilter }) => {
  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.PreventDefault();
    const form = e.target;
    const topicMovies = form.elements.name.value;
    if (topicMovies.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    onSearch(topicMovies);
    onFilter(topicMovies);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
