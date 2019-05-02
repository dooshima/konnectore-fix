import * as types from './actionTypes';
import axios from 'axios';
import Post from '../../services/Post/Post';
import KError from './../../models/KError';
import dialogActions from '../dialog/actions';
import Constants from '../../assets/Constants';
import appActions from '../app/actions';
import commentActions from '../comment/actions';
import meActions from '../me/actions';

const startUploadMedia = isUploading => ({
    type: types.POST_UPLOAD_MEDIA_STARTED,
    isUploading,  
});

const uploadMediaSuceeded = post => ({
    type: types.POST_UPLOAD_MEDIA_SUCCEEDED,
    post,
});

const uploadMediaFailed = uploadError => ({
    type: types.POST_UPLOAD_MEDIA_ERROR,
    uploadError,
});

const addPost = post => ({
  type: types.POST_ADD_POST,
  post,
});

const likePost = like => ({
  type: types.POST_LIKE_POST,
  like,
});

const viewPost = view => ({
  type: types.POST_VIEW_POST,
  view
});

const addComment = comment => ({
  type: types.POST_ADD_COMMENT,
  comment,
});

const sharePost = share => ({
  type: types.POST_SHARE_PSOT,
  share
});

const addPosts = byId => ({
  type: types.POST_ADD_POSTS,
  byId,
})

const uploadMedia = (data, token) => {
    return dispatch => {
        dispatch(startUploadMedia(true));
        upload(data, token, dispatch)
            .then( resp => {
                dispatch(startUploadMedia(false));
            } )
            .catch( error => {
                dispatch(startUploadMedia(false));
                console.log(error)
            } );
    }
}

const setProgressNumber = progressNumber => ({
    type: types.POST_PROGRESS_NUMBER,
    progressNumber,
});

const updatePostComment = comment => ({
    type: types.POST_UPDATE_POST_COMMENT,
    comment,
});

const clearPosts = byId => ({
    type: types.POST_CLEAR_POST,
    byId,
});

const upload = (data, token, dispatch)  => {

    if(!data) {
      return new Promise( (resolve, reject) => resolve({error: true, message: "No post data found!", data: {}}) );
    }
    // https://helloworld.com.ng/uploadfile.php
    const headers = {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        Authorization: 'Bearer ' + token,
    }
    return axios.post(Constants.BASE_URL + "api/upload-post", data, {
      onUploadProgress: (progressEvent) => {
        if (progressEvent.lengthComputable) {
           dispatch(setProgressNumber(progress(progressEvent)));
        }
      },
      headers: headers
    })
      .then( resp => {
        dispatch(setProgressNumber(0));
        if(!resp.data.error) {
          dispatch(dialogActions.showDialog(false));
          dispatch(dialogActions.setPostText(""));
          dispatch(dialogActions.setFormData({}));
          dispatch(dialogActions.setPostTextColor("#ffb91b"));
          dispatch(addPost(resp.data.data));
          dispatch(meActions.appendPostId(resp.data.data.id));
        } else {

        }
        
        //return {error: false, message: "Post was shared successfully!", data: resp};
      })
      .catch( error => {
            dispatch(setProgressNumber(0));
            //dispatch(dialogActions.showDialog(false));
            //dispatch(dialogActions.setPostText(""));
            //dispatch(dialogActions.setFormData({}));
            //dispatch(dialogActions.setPostTextColor("#ffb91b"));
          console.log(error)
          let err = new KError(true, "Error occured while processing your request. Please retry.");
          return err.toObj();
      });
  }

const progress = (event) => {
    const { total, loaded } = event;
    let val = Math.ceil(loaded / total * 100);
    return val;
};

const handleLikePost = (form, token) => {
  return dispatch => {
    dispatch(appActions.appIsLoading(true));
    Post.likePost(form, token)
      .then( response => {
        dispatch(appActions.appIsLoading(false));
        if(!response.error) {
          dispatch(likePost(response.data));
        }
      } )
      .catch( error => {
        dispatch(appActions.appIsLoading(false));
        console.log(error);
      })
  }
}

const handleVote = (form, token) => {
  return dispatch => {
    dispatch(appActions.appIsLoading(true));
    Post.vote(form, token)
      .then( response => {
        dispatch(appActions.appIsLoading(false));
        if(!response.error) {
          //dispatch(vote(response.data));
        }
      } )
      .catch( error => {
        dispatch(appActions.appIsLoading(false));
        console.log(error);
      })
  }
}

const handleViewPost = (form, token) => {
  return dispatch => {
    dispatch(appActions.appIsLoading(true));
    Post.viewPost(form, token)
      .then( response => {
        console.log(response)
        dispatch(appActions.appIsLoading(false));
        if(!response.error) {
          dispatch(viewPost(response.data));
        }
      } )
      .catch( error => {
        dispatch(appActions.appIsLoading(false));
        console.log(error);
      })
  }
}

const handleAddComment = (form, token) => {
  return dispatch => {
    dispatch(appActions.appIsLoading(true));
    Post.addComment(form, token)
      .then( response => {
        dispatch(appActions.appIsLoading(false));
        if(!response.error) {
          dispatch(commentActions.addComment(response.data));
          dispatch(meActions.appendCommentId(response.data.id));
          dispatch(meActions.appendPostId(response.data.commentable_id));
          dispatch(updatePostComment(response.data));
        }
      } )
      .catch( error => {
        dispatch(appActions.appIsLoading(false));
        console.log(error);
      })
  }
}

function setDefault() {
  return dispatch => {
    dispatch(startUploadMedia(false));
    dispatch(uploadMediaSuceeded({}));
    dispatch(uploadMediaFailed(""));
    dispatch(setProgressNumber(0));
    dispatch(clearPosts({}));
  }
}

const postActions = {
    startUploadMedia,
    uploadMediaSuceeded,
    uploadMediaFailed,
    uploadMedia,
    setDefault,
    addPost,
    handleAddComment,
    handleLikePost,
    handleViewPost,
    addPosts,
    handleVote,
};

export default postActions;