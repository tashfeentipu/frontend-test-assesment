export const GetAsync = async (baseURL) => {
  try {
    const response = await fetch(baseURL, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const PutAsync = async (baseURL, headers, body) => {
  const response = await fetch(baseURL, {
    headers: headers,
    method: "PATCH",
    body: body
  });
  return response.json();
};
