export const fetchConfig = (method, reqBody = {}) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const fetchConfig = {         
    method,
    headers,
    body: JSON.stringify({
      ...reqBody
    })
  }

  return fetchConfig;
}