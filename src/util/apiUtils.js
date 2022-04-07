// create an object config with url and options to fetch data from api
export const fetchConfig = (route, method, reqBody = null, token = null) => {
  const baseUrl = "http://localhost:3380/";
  const url = baseUrl + route;
  
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  if(token) 
    headers.append("Authorization", `Bearer ${token}`);
  
  const options = {         
    method,
    headers,
  }

  if(reqBody) {
    options.body = JSON.stringify({
      ...reqBody
    })
  }

  return { url, options };
}