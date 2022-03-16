const GET_CHARACTERS = "GET_CHARACTERS";
const CHANGE_FILTER = "CHANGE_FILTER";
const GET_TOTAL_PAGES = "GET_TOTAL_PAGES";
const UPDATE_SEARCH_NAME = "UPDATE_SEARCH_NAME";

export default {
  CHANGE_FILTER,
  GET_CHARACTERS,
  GET_TOTAL_PAGES,
  UPDATE_SEARCH_NAME,
};

// const fetchAllItems = async () => {
//   const promises = new Array(42).map((_, idx) => {
//     return fetch(`https://...?page=${idx + 1}`);
//   });
//   let allItems = null;
//   try {
//     allItems = await Promise.all(promises);
//     console.log('allItems', allItems);
//     return allItems;
//   } catch (e) {
//     console.log(e);
//   }
// };
