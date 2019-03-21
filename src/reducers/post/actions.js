import * as types from './actionTypes';
import axios from 'axios';
import Post from '../../services/Post/Post';
import KError from './../../models/KError';

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

const uploadMedia = data => {
    return dispatch => {
        dispatch(startUploadMedia(true));
        upload(data, dispatch)
            .then( resp => {
                dispatch(startUploadMedia(false));
                console.log(resp)
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
})

const upload = (data, dispatch)  => {
    if(!data) {
      return new Promise( (resolve, reject) => resolve({error: true, message: "No post data found!", data: {}}) );
    }

    return axios.post("https://helloworld.com.ng/uploadfile.php", data, {
      onUploadProgress: (progressEvent) => {
        if (progressEvent.lengthComputable) {
           dispatch(setProgressNumber(progress(progressEvent)));
        }
      }
    })
      .then( resp => {
        dispatch(setProgressNumber(0));
        return {error: false, message: "Post was shared successfully!", data: resp};
      })
      .catch( error => {
            dispatch(setProgressNumber(0));
          console.log(error)
          let err = new KError(true, "Error occured while posting");
          return err.toObj();
      });
  }

const progress = (event) => {
    const { total, loaded } = event;
    let val = Math.ceil(loaded / total * 100);
    return val;
  };

const postActions = {
    startUploadMedia,
    uploadMediaSuceeded,
    uploadMediaFailed,
    uploadMedia
};

export default postActions;