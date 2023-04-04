import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListVideo } from '../redux/actions/VideoAction'
import { getListTag } from '../redux/actions/TagAction'
import Toast from "../components/loadingError/Toast";
import { toast } from "react-toastify";


const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const Flowdata = () => {
  useEffect(() => {
      toast.success("Tag Added", ToastObjects);
  },[])
  console.log(toast)
  return (
    <>

    </>
  )
}

export default Flowdata