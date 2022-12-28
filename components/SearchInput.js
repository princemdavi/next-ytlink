import { useEffect, useState } from "react";
import css from "styled-jsx/css";
import getVideoId from "get-video-id";
import getYotubePlaylistId from "get-youtube-playlist-id";
import { Suggestions, Loader } from ".";
import {
  getPlaylist,
  getSuggestion,
  getVideo,
  searchPlaylist,
  searchVideo,
} from "../services";
import axios from "axios";
import { useTheme } from "next-themes";

const SearchInput = ({
  setSearchedVideos,
  setVideoDetails,
  setSongDetails,
  format,
  playlist,
  setSearchedPlaylists,
  setPlaylist,
  setVideoSearching,
  setGettingVideoDetails,
  setGettingSongDetails,
  setSearchingPlaylists,
}) => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [getSuggestions, setGetSuggesstions] = useState(true);

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const backend_url = "https://ytlinkapi.herokuapp.com";

  const handleSuggestionSelected = async (suggestion) => {
    try {
      !playlist && setSearchedVideos(null);
      !playlist && format != "mp3" && setVideoDetails(null);
      format == "mp3" && setSongDetails(null);
      playlist && setSearchedPlaylists(null);

      setGetSuggesstions(false);
      setSuggestions(null);
      !playlist && setVideoSearching && setVideoSearching(true);
      setSearchTerm(suggestion);

      if (playlist) {
        setSearchingPlaylists(true);
        const result = await searchPlaylist(suggestion);
        return setSearchedPlaylists(result);
      }

      const result = await searchVideo(suggestion);
      setSearchedVideos(result);
    } catch (error) {
      console.log(error);
    } finally {
      setVideoSearching && setVideoSearching(false);
      setSearchingPlaylists && setSearchingPlaylists(false);
      setGetSuggesstions(true);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!searchTerm) return;
      !playlist && setSearchedVideos(null);
      !playlist && format != "mp3" && setVideoDetails(null);
      format == "mp3" && setSongDetails(null);
      playlist && setSearchedPlaylists(null);

      setGetSuggesstions(false);
      setSuggestions(null);

      const { id: videoId, service } = getVideoId(searchTerm);

      const playlistId = getYotubePlaylistId(searchTerm);

      if (playlist && playlistId) {
        setVideoSearching(true);
        const playlist = await getPlaylist(playlistId);
        return setPlaylist(playlist);
      }

      if (playlist && !playlistId) {
        setSearchingPlaylists(true);
        const result = await searchPlaylist(searchTerm);
        return setSearchedPlaylists(result);
      }

      if (service == "youtube" && videoId && format == "mp3") {
        setGettingSongDetails(true);
        const result = await axios.get(`${backend_url}/info/audio/${videoId}`);
        setSongDetails(result.data);
        return;
      }

      if (service == "youtube" && videoId) {
        setGettingVideoDetails(true);
        const video = await getVideo(videoId, format);
        setVideoDetails(video);
        return;
      }
      setVideoSearching && setVideoSearching(true);
      const result = await searchVideo(searchTerm);
      setSearchedVideos(result);
    } catch (error) {
      console.log(error.message);
    } finally {
      setGetSuggesstions(true);
      setVideoSearching && setVideoSearching(false);
      setSearchingPlaylists && setSearchingPlaylists(false);
      setGettingVideoDetails && setGettingVideoDetails(false);
      setGettingSongDetails && setGettingSongDetails(false);
    }
  };

  const handlePaste = async (event) => {
    try {
      // resetting state
      !playlist && setSearchedVideos(null);
      !playlist && format != "mp3" && setVideoDetails(null);
      format == "mp3" && setSongDetails(null);
      setGetSuggesstions(false);
      setSuggestions(null);
      const pastedValue = event.clipboardData.getData("text");

      if (playlist) {
        const playlistId = getYotubePlaylistId(pastedValue);
        if (!playlistId) return console.log("but kwena");
        setVideoSearching(true);
        const playlist = await getPlaylist(playlistId);
        return setPlaylist(playlist);
      }

      const { id: videoId, service } = getVideoId(pastedValue);

      if (service == "youtube" && videoId && format == "mp3") {
        setGettingSongDetails(true);
        const result = await axios.get(`${backend_url}/info/audio/${videoId}`);
        setSongDetails(result.data);
        return;
      }

      if (service == "youtube" && videoId) {
        setGettingVideoDetails(true);
        const video = await getVideo(videoId);
        setVideoDetails(video);
        return;
      }

      if (playlist) {
        setSearchingPlaylists(true);
        const result = await searchPlaylist(pastedValue);
        return setSearchedPlaylists(result);
      }

      setVideoSearching(true);

      const result = await searchVideo(pastedValue);
      setSearchedVideos(result);
    } catch (error) {
    } finally {
      setGetSuggesstions(true);
      setVideoSearching && setVideoSearching(false);
      setSearchingPlaylists && setSearchingPlaylists(false);
      setGettingVideoDetails && setGettingVideoDetails(false);
      setGettingSongDetails && setGettingSongDetails(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    if (!searchTerm || !getSuggestions) return;
    getSuggestion(searchTerm)
      .then((results) => {
        setSuggestions(results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [searchTerm]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="container" data-theme={resolvedTheme}>
      <form className="form__wrapper" onSubmit={handleSubmit}>
        <input
          autoFocus
          type="search"
          placeholder={`Search or paste ${
            playlist ? "playlist" : "video link"
          } here...`}
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onPaste={handlePaste}
          onBlur={() =>
            setTimeout(() => {
              setGetSuggesstions(false);
            }, 200)
          }
          onFocus={() => setGetSuggesstions(true)}
        />
        <button type="submit" className="btn">
          download
        </button>
        {/* youtube suggestions */}
        {suggestions?.length > 0 && getSuggestions && (
          <Suggestions
            suggestions={suggestions}
            handleSuggestionSelected={handleSuggestionSelected}
          />
        )}
      </form>
      <style jsx>{styles}</style>
    </div>
  );
};

export default SearchInput;

const styles = css`
  .form__wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0 auto;
    position: relative;
  }

  .searchInputform__wrapper {
    flex-grow: 1;
    position: relative;
  }

  .input {
    width: 100%;
    height: 45px;
    font-size: 16px;
    background-color: #ebeced;
    border-radius: 0.25rem;
    padding: 0 10px;
    outline: none;
    border: 1px solid #0086e7;
  }

  [data-theme="dark"] .input {
    background-color: #184772;
    color: #fff;
    border: 1px solid #fff;
  }

  .input::placeholder {
    font-size: 15px;
  }

  [data-theme="dark"] .input::placeholder {
    font-size: 15px;
    color: white;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 37px;
    padding: 0 0.75rem;
    font-size: 16px;
    text-transform: capitalize;
    border: none;
    background-color: #0086e7;
    border-radius: 0.25rem;
    cursor: pointer;
    color: white;
    transform: perspective(1px) translateZ(0);
    overflow: hidden;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 500;
  }

  .container[data-theme="dark"] .btn {
    background: hsl(205, 100%, 35%);
  }

  .btn::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    clip-path: circle(0% at 50% 50%);
    background: hsl(205, 100%, 50%);
    transition: 0.4s;
  }

  .container[data-theme="dark"] .btn::before {
    background-color: #0086e7;
  }

  .btn:hover::before {
    clip-path: circle(100% at 50% 50%);
  }

  @media (min-width: 481px) {
    .form__wrapper {
      flex-direction: row;
    }

    .input {
      height: 55px;
    }

    .btn {
      height: unset;
      font-size: 18px;
    }
  }
`;
