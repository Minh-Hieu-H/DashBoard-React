import axios from "axios";
import URL from "../Url";

// GET ALL LIST VIDEO
export const getListVideo = (params) => async (dispatch) => {
  try {
    // console.log(`Link url: ${URL}/api/videos/all`);
    dispatch({ type: "VIDEO_LIST_REQUEST" });

    let query = "";
    if (params?.keyword) {
      query += `keyword=${params.keyword}`;
    }
    if (params?.label) {
      query += query.length
        ? `&label=${params.label}`
        : `label=${params.label}`;
    }
    if (params?.react) {
      query += query.length
        ? `&react=${params.react}`
        : `react=${params.react}`;
    }
    // console.log("Params đã được truyền vào đây:", params);
    // console.log(`${URL}/api/videos/all?${query}`);
    const { data } = await axios.get(`${URL}/api/videos/all?${query}`);
    // console.log(data);
    dispatch({ type: "VIDEO_LIST_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    // const message =
    //   error.response && error.response.data.message
    //     ? error.response.data.message
    //     : error.message;
    const message = "Có lỗi khi thực hiện tìm kiếm";
    dispatch({
      type: "VIDEO_LIST_FAIL",
      payload: message,
    });
  }
};

// GET SINGLE VIDEO
export const getVideoDetails = (id) => async (dispatch) => {
  try {
    console.log("Đã request");
    dispatch({ type: "VIDEO_DETAILS_REQUEST" });
    const { data } = await axios.get(`${URL}/api/videos/${id}`);
    console.log("Đã nhận data", data);
    dispatch({ type: "VIDEO_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "VIDEO_DETAILS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Toggle isFollowed attribute of video
export const toggleFollow = (id, isFollowed) => async (dispatch) => {
  try {
    dispatch({ type: "VIDEO_DETAILS_REQUEST" });
    const { data } = await axios.post(`${URL}/api/videos/${id}`, {
      vd_followed: isFollowed,
    });
    dispatch({ type: "VIDEO_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "VIDEO_DETAILS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get top negative videos
export const getTopNegVideo = () => async (dispatch) => {
  try {
    dispatch({ type: "VIDEO_LIST_REQUEST" });
    const { data } = await axios.get(`${URL}/api/videos/top-neg`);
    // console.log(data);
    dispatch({ type: "VIDEO_LIST_SUCCESS", payload: data });
  } catch (error) {
    const message = "Có lỗi khi load dashboard";
    dispatch({
      type: "VIDEO_LIST_FAIL",
      payload: message,
    });
  }
};
