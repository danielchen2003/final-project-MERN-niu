import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_POST,
  FETCH_BY_SEARCH,
} from "../constants/actionTypes"

import * as api from "../api/index.js"


export const getPost = (id) => async (dispatch) => {
  try {
   
console.log(id);
    const { data } = await api.fetchPost(id);
console.log(data);
//                     todo            payload 里面的post 是key 一定要和reducer里面名字对上
    dispatch({ type: FETCH_POST, payload: { post: data } });
  } catch (error) {
    console.log(error);
  }
};

// TODO 这里是储存每一个动作 原本我们放在每一个组件里面，现在拆分出来，相当于是厨师烹饪环节

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    
// TODO  这里叫api里面的fetchall 然后 payload就是数据返回给posts

    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

// export const getPosts = (page) => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOADING });
//     const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);

//     dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
//     dispatch({ type: END_LOADING });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
   
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)

    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post)

    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)

    dispatch({ type: LIKE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)

    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error.message)
  }
}
