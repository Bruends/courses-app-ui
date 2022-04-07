export const getTokenInStorage = () => {
  const token = localStorage.getItem("token");

  if(!token) return false;
  
  return token;
}

export const setTokenInStorage = (token) => {
  localStorage.setItem("token", token);
}

export const removeToken = () => {
  localStorage.removeItem("token");
}