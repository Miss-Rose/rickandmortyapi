export const selectItemByFilter = (obj, filter) => {
  if (filter.name === "All") {
    return obj;
  } else {
    console.log("obje, f", obj, filter);
    const a = obj.filter((item) => item.species === filter.name);
    console.log("DATA", a);
    return a;
  }
};
