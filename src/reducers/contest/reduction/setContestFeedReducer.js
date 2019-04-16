/**
 * Reducer file to upload the contest key of the store
 */

 const setContestFeedReducer = (feed, action) => {
     if(null === action.feed) {
         return feed;
     }

     return action.feed;
 };

 export default setContestFeedReducer;