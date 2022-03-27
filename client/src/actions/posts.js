import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
// we come here after successfully creating api for delete route

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
  dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

//api will have AXIOS.delete(url+id) route
// we are on that url & calling deletepot(id);
//now we dispatch the ACTION of type DELETE by specifying payload of // IDEA:
//this goes to REDUCERS post.js file which will
//specif switch case for these actions
// THEN we go to DELETE case and it FILTERS out (currect id post which we have succefully deleted ).and shows other posts
//now we go to posts and dispatch THAT ACTION
