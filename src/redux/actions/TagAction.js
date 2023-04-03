import axios from "axios";
import URL from "../Url";

// GET ALL TAG FROM DB
export const getListTag = () => async (dispatch) => {
    try {

        dispatch({ type: 'TAG_LIST_REQUEST' });
        const response_tag = await axios.get(`${URL}/api/tags/all`)
        const response_by_tag = await axios.get(`${URL}/api/videos/by-tag`)
        const data_tag = response_tag["data"]
        const data_by_tag = response_by_tag["data"]
        console.log(data_by_tag, data_tag)
        dispatch({ type: 'TAG_LIST_SUCCESS', payload1: data_tag, payload2: data_by_tag })

    } catch (error) {

        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        dispatch({
            type: 'TAG_LIST_FAIL',
            payload: message,
        })
    }
}

// Get video by tag
export const getTagDetail = (tag) => async (dispatch) => {
    try {
        dispatch({ type: "TAG_DETAILS_REQUEST" })
        const { data } = await axios.get(`${URL}/api/tags/${tag}`)
        console.log(`Đường link là ${URL}/api/tags/${tag} `)
        console.log(data)
        dispatch({ type: "TAG_DETAILS_SUCCESS", payload: data })
    } catch(error) {
        dispatch({
            type: 'TAG_DETAILS_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}