import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_BY_SEARCH,
  FETCH_POST,
} from "../constants/actionTypes"
// TODO 这里是服务员环节，action type 是点菜， 然后根据目录action type 里面的东西去点菜
export default (posts = [], action) => {
  switch (action.type) {
 
    case FETCH_ALL:
      return action.payload
      case FETCH_BY_SEARCH:
      return   action.payload.data
      case FETCH_POST:
        //  todo  这里的post和控制器里面post一定要对上不然就读不到data
        return  action.payload.post 
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
      
      
    case CREATE:
      return [...posts, action.payload]
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
    case DELETE:
      return posts.filter((post) => post._id !== action.payload)
    default:
      return posts
  }
}
