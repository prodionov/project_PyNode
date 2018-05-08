export const sendData = async (url, data) => {
  const response = await fetch(url, {
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    method: "POST"
  });
  const json = await response.json();
  return json.payload;
};
