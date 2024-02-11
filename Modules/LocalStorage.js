// LocalStorage
const get = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return defaultValue;
};
const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { set, get };
