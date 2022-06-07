import search from "youtube-api-v3-search";

export const videoSearchStart = () => {
  return {
    type: "SEARCH_VIDEO_START",
    loading: true,
    error: false,
  };
};

export const videoSearchSuccess = (videos) => {
  return {
    type: "SEARCH_VIDEO_SUCCESS",
    videos,
    loading: false,
    error: false,
  };
};

export const videoSearchError = () => {
  return {
    type: "SEARCH_VIDEO_ERROR",
    loading: false,
    error: true,
  };
};

export const searchVideo = (term) => {
  return (dispatch) => {
    dispatch(videoSearchStart());

    search(process.env.REACT_APP_YOUTUBE_API_KEY, { q: term })
      .then((data) => dispatch(videoSearchSuccess(data.items)))
      .catch(() => dispatch(videoSearchError()));
  };
};
