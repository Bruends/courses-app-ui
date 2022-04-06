// create a config and url to fetch data from api
export const fetchConfig = (route, method, reqBody = {}, token = null) => {
  const baseUrl = "http://localhost:3380/";
  const url = baseUrl + route;
  
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  if(token) 
    headers.append("Authorizarion", `Bearer ${token}`);
  
  const options = {         
    method,
    headers,
    body: JSON.stringify({
      ...reqBody
    })
  }

  return { url, options };
}