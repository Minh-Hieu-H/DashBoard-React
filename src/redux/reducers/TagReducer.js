// Reducer tagList
export const tagListReducer = (state = {tags_list:[],by_tags_list:[]},action) => {
    switch(action.type){
        case 'TAG_LIST_REQUEST':
            return {loading:true, tags_list:[],by_tags_list:[]}
        case 'TAG_LIST_SUCCESS':
            return {loading:false,tags_list:action.payload1,by_tags_list:action.payload2}
        case 'TAG_LIST_FAIL':
            return { loading: false, error: action.payload}
        default:
            return state;
}}
//  Reducer video by tag
export const  tagDetailsReducer =(
    state ={videos: []},action
)=> {
    switch(action.type){
        case 'TAG_DETAILS_REQUEST':
            return {loading:true,videos:[]}
        case 'TAG_DETAILS_SUCCESS':
            return {loading:false, videos:action.payload}
        case 'TAG_DETAILS_FAIL':
            return {loading:false,error:action.payload}
        default: 
            return state;
    }
}