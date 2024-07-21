import css from "../SearchForm/SearchForm.module.css";
const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.elements.name.value.trim());
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
