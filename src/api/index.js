const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT";

export const getToken = () => {
  return localStorage.getItem("auth-token");
};

export const clearToken = () => {
  localStorage.removeItem("auth-token");
};

const setToken = (token) => {
  localStorage.setItem("auth-token", token);
};

function buildHeaders() {
  let base = {
    "Content-Type": "application/json",
  };

  if (getToken()) {
    base["Authorization"] = `Bearer ${getToken()}`;
  }

  return base;
}

export const auth = async (username, password, isNew = false) => {
  const url = `${BASE_URL}/users` + (isNew ? "/register" : "/login");

  const response = await fetch(url, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  });

  const { error, data } = await response.json();

  if (error) {
    throw Error(error.message);
  }

  if (data && data.token) {
    setToken(data.token);
  }

  return data;
};

export const hitAPI = async (method, endpoint, bodyObj) => {
  const payload = {
    method: method,
    headers: buildHeaders(),
  };

  if (bodyObj) {
    payload.body = JSON.stringify(bodyObj);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, payload);

  const { error, data } = await response.json();

  if (error) {
    throw Error(error.message);
  }

  if (data && data.token) {
    setToken(data.token);
  }

  return data;
};

export const fetchPost = async (post) => {
  console.log(post, "in api");
  const url = `${BASE_URL}/posts`;

  const response = await fetch(url, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify({ post }),
  });

  const { error, data } = await response.json();

  if (error) {
    throw Error(error.message);
  }

  return data;
};

export const deletePost = async (id) => {
  const url = `${BASE_URL}/posts/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: buildHeaders(),
  });

  const { error, data } = await response.json();

  if (error) {
    throw Error(error.message);
  }

  return data;
};

export const fetchMessages = async (post) => {
  console.log(post, "in messages");
  const url = `${BASE_URL}/posts/${id}/messages`;

  const response = await fetch(url, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify({
      message: {},
    }),
  });

  const { error, data } = await response.json();

  if (error) {
    throw Error(error.message);
  }

  return data;
};