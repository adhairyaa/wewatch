import { createContext, useContext, useReducer } from "react";


const DataContext = createContext();
const videos = [
  {
    VideoLink: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xR3V5Ow2dTI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; 
     encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    VideoTitle: "Baller",
    VideoCategory: "Music",
    VideoLikes: "409K",
    VideoViews: "10M",
    Thumbnail: "PhotoCover.jpg",
    Id: 1,
    VideoSource:"https://www.youtube.com/embed/xR3V5Ow2dTI"
  },
  {
    VideoLink: (
      <iframe width="560" height="315" src="https://www.youtube.com/embed/rvj7Qxhs05s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    ),
    VideoTitle: "New 2024 Ford Mustang GT",
    VideoCategory: "Product",
    VideoLikes: "409K",
    VideoViews: "2.8M",
    Thumbnail: "Video2.jpg",
    Id: 2,
    VideoSource:"https://www.youtube.com/embed/rvj7Qxhs05s"
  },
  {
    VideoLink: (
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AVjRuM7Rong" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    ),
    VideoTitle: "True love explained | Abraham Twerski",
    VideoCategory: "Gyan",
    VideoLikes: "409K",
    VideoViews: "11M",
    Thumbnail: "Video3.jpg",
    Id: 3,
    VideoSource:"https://www.youtube.com/embed/AVjRuM7Rong"
  },
  {
    VideoLink: (
      <iframe width="560" height="315" src="https://www.youtube.com/embed/lrM5CRg-O0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    ),
    VideoTitle: "Easy Way To Market Yourself ",
    VideoCategory: "Gyan",
    VideoLikes: "409K",
    VideoViews: "272K",
    Thumbnail: "Video5.jpg",
    Id: 5,
    VideoSource:"https://www.youtube.com/embed/lrM5CRg-O0I"
  },
  {
    VideoLink: (
      <iframe width="560" height="315" src="https://www.youtube.com/embed/SZcupt0Yqaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    ),
    VideoTitle: "Kendrick Lamar - Rich Spirit",
    VideoCategory: "Music",
    VideoLikes: "409K",
    VideoViews: "1.3M",
    Thumbnail: "Video4.jpg",
    Id: 4,
    VideoSource:"https://www.youtube.com/embed/SZcupt0Yqaw"
  },{
    VideoLink: (
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AXnqkVTFUqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    ),
    VideoTitle: "All Time Low",
    VideoCategory: "Music",
    VideoLikes: "2.5M",
    VideoViews: "1.3M",
    Thumbnail: "Video6.jpg",
    Id: 6,
    VideoSource:"https://youtu.be/AXnqkVTFUqY"},{
      VideoLink: (
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bhlvYmn1IUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      ),
      VideoTitle: "Way of Ronin",
      VideoCategory: "Gyan",
      VideoLikes: "409K",
      VideoViews: "903K",
      Thumbnail: "Video7.jpg",
      Id: 7,
      VideoSource:"https://youtu.be/bhlvYmn1IUQ"},
      {
        VideoLink: (
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KcMQO7ckh3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        ),
        VideoTitle: "Nothing Ear 1",
        VideoCategory: "Product",
        VideoLikes: "409K",
        VideoViews: "1.3M",
        Thumbnail: "Video8.jpg",
        Id: 8,
        VideoSource:"https://youtu.be/KcMQO7ckh3s"}
];


export const DataProvider = ({ children }) => {
  const handleDispatch = (state,action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD_TO_WATCHLIST":
        return (state = { ...state, Watchlist: [...state.Watchlist, payload] });
      case "REMOVE_FROM_WATCHLIST":
        return (state = {...state, Watchlist:[...state.Watchlist.filter((video=>video.Id!==payload.Id))]})
      case "ADD_TO_HISTORY":
        return (state = { ...state, History: [...state.History, payload] } );
      case "ADD_TO_LIKED":
        return (state = { ...state, Liked: [...state.Liked, payload] });
        case "REMOVE_FROM_LIKED":
          return (state = {...state,Liked : [...state.Watchlist.filter((video)=>video.Id!== payload.Id)]})
      case "ADD_TO_PLAYLIST":
        return (state = { ...state, Watchlist: [...state.Playlist, payload] });
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(handleDispatch, {
    Data: videos,
    Watchlist: [],
    Liked: [],
    History: [],
    SortBy: null,
    Category: null,
    Playlist: [],
  }); 
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataProvider = () => useContext(DataContext);
