import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListVideo } from '../redux/actions/VideoAction'
import  {getListTag} from '../redux/actions/TagAction'
const Flowdata = () => {
  // const dispatch = useDispatch()
  // const tagList = useSelector((state) => state.tagList)

  // //  Check state videList
  // const { loading, tags_list,by_tags_list, error } = tagList;
  // const tag_by_tag = [
  //   { _id: "đảng 1", count: 450 },
  //   { _id: "đảng", count: 450 },
  // ];
  
  // const tag_list = [
  //   { _id: "64276399a0a058f88564c363", vd_tag: "đảng" },
  //   { _id: "64276399a0a058f88564c364", vd_tag: "đảng 1" },
  //   { _id: "36276399a0a058f88564c364", vd_tag: "đảng 2" },
  // ];
  
  // const tag_statistics = tag_list.map((tag) => {
  //   const foundTag = tag_by_tag.find((item) => item._id === tag.vd_tag);
  //   const count = foundTag ? foundTag.count : 0;
  //   return { ...tag, count };
  // });
  
  // console.log(tag_statistics);
  // useEffect(() => {
  //   dispatch(getListTag())
  // }, [dispatch]);
  return (
    <>
      <div> Hello data</div>
      <div className='data_center'>

      </div>
    </>
  )
}

export default Flowdata