import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// TODO: Look for a better way to optimize tokenizing a request
// export const tokenizedApi = axios.create({
//   baseURL: api.defaults.baseURL,
//   headers: {
//     ...api.defaults.headers,
//     Authorization: `Bearer ${(JSON.parse(localStorage.getItem('userData') as string) as UserData).remember_token}`
//   }
// });

// export const store = "http://localhost:8000/storage/uploads/"; // For storage, find out how to do this in express
