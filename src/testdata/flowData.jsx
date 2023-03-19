import React, {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getListVideo } from '../redux/actions/VideoAction'
const Flowdata = () => {
  const dispatch = useDispatch()
  const videoList = useSelector((state)=> state.videoList)
  
  //  Check state videList
  const {loading, videos, error} = videoList;
  console.log("loading: ", loading);
  console.log("videos: ", videos);
  console.log("error: ", error);
  useEffect(() => {
    dispatch(getListVideo())
  }, [dispatch]);
  return (
    <div> Hello data</div>
  )
}

export default Flowdata