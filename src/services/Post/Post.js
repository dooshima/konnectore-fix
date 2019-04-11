import KError from '../../models/KError';
import Server from '../Server/Server';
import Constants from './../../assets/Constants';
import axios from 'axios';

const Post = {
    uploadMedia,
};

const uploadMedia = data => {
    console.log(data);
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

const progress = (event) => {
    const { total, loaded } = event;
    let val = Math.ceil(loaded / total * 100);
    this.setState({ uploadprogress: val });

};

export default Post;