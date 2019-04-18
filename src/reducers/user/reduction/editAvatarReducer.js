/**
 * Function to provide the return user onto the store on successful login
 */

 const editAvatarReducer = (data, action) => {
     if(null === action.data) {
         return data;
     }

     return {...data, avatar: action.data.path}
 }

 export default editAvatarReducer;