import css from "../SearchForm/SearchForm.module.css";
const SearchForm = ({ onSubmit }) => {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
