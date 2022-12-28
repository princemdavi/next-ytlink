import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import css from "styled-jsx/css";
import { SearchedPlaylist } from ".";

const SearchedPlaylists = ({ playlists }) => {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="container" data-theme={resolvedTheme}>
      <div className="content">
        {playlists.map((playlist) => (
          <SearchedPlaylist key={playlist.listId} playlist={playlist} />
        ))}
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default SearchedPlaylists;

const styles = css`
  .container {
    padding-block: 2rem;
    background-color: #ebeced;
  }

  .container[data-theme="dark"] {
    background-color: #0e1525;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 10px;
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
  }
`;
