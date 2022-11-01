import * as api from "../api";

///action creator 
export  const getMovies = () => async (dispatch) => {
  try {
    const {data} = await api.fetchMovies() 
  
    dispatch({ type: "FETCH_ALL", payload: data });

  } catch (error) {
    console.log(error.message)
  }
  
;
};


export const createMovie = (movie) => async (dispatch) => {
  try {
    const { data } = await api.createMovie(movie);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

