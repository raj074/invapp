export const GLOBALTYPES = {
  AUTH: "AUTH",
  INTRO: "INTRO",
  ALERT: "ALERT",
  THEME: "THEME",
  MODAL: "MODAL",
  USER_TYPE: "USER_TYPE",
  UPDATE_USER: "UPDATE_USER",

};

export const EditData = (data, id, post) => {
  const newData = data.map((item) => (item._id === id ? post : item));
  return newData;
};

export const DeleteData = (data, id) => {
  const newData = data.filter((item) => item._id !== id);
  return newData;
};

