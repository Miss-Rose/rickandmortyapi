export const selectItemByFilter = (obj, filter) => {
  if (filter.name === "All") {
    return obj;
  } else {
    return obj.filter((item) => item.species === filter.name);
  }
};
