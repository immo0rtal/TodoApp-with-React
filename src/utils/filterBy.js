const filterProperties = {
  ALL: (value) => value,
  ACTIVE: (value) => value.filter((el) => !el.completed),
  COMPLETED: (value) => value.filter((el) => el.completed),
};

export const filterBy = (array, filterType) => {
  return filterProperties[filterType](array);
};
