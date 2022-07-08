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

export const PutAsync = async (baseURL, headers) => {
  const response = await fetch(baseURL, {
    headers: headers,
    method: "PATCH",
  });
  return response.json();
};
