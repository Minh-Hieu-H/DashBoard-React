import axios from "axios";
import URL from "../Url";

export const getListVideo = () => async (dispatch) => {
    
    try {
      console.log(` 'Link url:' ${URL}/api/videos/all`)
      dispatch({type:'VIDEO_LIST_REQUEST'});
     
      const {data}  = await axios.get(`${URL}/api/videos/all`);

      dispatch({ type:'VIDEO_LIST_SUCCESS', payload: data });
    } catch (error) {
      console.log(error)
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: 'VIDEO_LIST_FAIL',
        payload: message,
      });
    }
  };