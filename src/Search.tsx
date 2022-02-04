import { FunctionComponent, useState } from "react";

interface SearchProps {
  searchText: string;
  onSearchSubmit: (newSearchText: string) => void;
}

export const Search: FunctionComponent<SearchProps> = ({
  searchText,
  onSearchSubmit,
}: SearchProps) => {
  const [search, setInput] = useState(searchText);

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    onSearchSubmit(searchText);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <label htmlFor="search-input">
        Search by Title
        <input
          id="search-input"
          type="text"
          value={search}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
