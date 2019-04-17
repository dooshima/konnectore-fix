/**
 * Function to toggle the Auth Loading process status
 */

 const talentCategoryReducer = (talentCategories, action) => {
     if(action.talentCategories === null) {
         return talentCategories;
     }

     return action.talentCategories;
 }

 export default talentCategoryReducer;

