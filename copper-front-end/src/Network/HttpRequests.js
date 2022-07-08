const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};


export const GetAsync = async (baseURL) => {
  try {
    const response = await fetch(baseURL, {
      headers: headers,
      method: "GET",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const PostAsync = async (baseURL, body) => {
  try {
    const response = await fetch(baseURL, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error) {
    console.log("POST", error);
  }
};

export const PutAsync = async (baseURL, body) => {
  const response = await fetch(baseURL, {
    headers: headers,
    method: "PUT",
    body: body,
  });
  return response.json();
};

export const DeleteAsync = async (baseURL) => {
  const response = await fetch(baseURL, {
    headers: headers,
    method: "DELETE",
  });
  return response.json();
};
