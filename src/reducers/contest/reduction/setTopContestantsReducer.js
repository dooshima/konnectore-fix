import Utility from '../../../services/Utility';
/**
 * Reducer file to upload the contest key of the store
 */

 const setTopContestantsReducer = (topContestants, action) => {
     if(!Utility.isset(action.topContestants)) {
         return topContestants;
     }

     return action.topContestants;
 };

 export default setTopContestantsReducer;