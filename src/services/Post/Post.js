import KError from '../../models/KError';
import Server from '../Server/Server';
import Constants from './../../assets/Constants';
import axios from 'axios';

const Post = {
    uploadMedia,
    likePost,
    viewPost,
    sharePost,
    addComment,
};

function likePost (form, token) {
  return Server.authPost('api/like-post', form, token)
    .then( response => response.data );
}

function viewPost (form, token) {
  return Server.authPost('api/view-post', form, token)
    .then( response => response.data );
}

const sharePost = (form, token) => {
  return Server.authPost('api/share-post', form, token)
    .then( response => response.data );
}

function addComment (form, token) {
  return Server.authPost('api/add-comment', form, token)
    .then( response => response.data );
}
const uploadMedia = data => {
    if(!data) {
      return new Promise( (resolve, reject) => resolve({error: true, message: "No post data found!", data: {}}) );
    }

    return axios.post("https://helloworld.com.ng/uploadfile.php", data, {
      onUploadProgress: (progressEvent) => {
        if (progressEvent.lengthComputable) {
           this.progress(progressEvent);
        }
      }
    })
      .then( resp => {
        return {error: false, message: "Post was shared successfully!", data: resp};
      })
      .catch( error => {
          console.log(error)
          let err = new KError(true, "Error occured while posting");
          return err.toObj();
      });
  }

export default Post;