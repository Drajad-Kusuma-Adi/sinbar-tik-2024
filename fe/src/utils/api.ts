import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    'Accept': 'application/json',
    // "Content-Type": "multipart/form-data", Can't use this because express only accepts json
    "Content-Type": "application/json"
  }
});

// export const store = "http://localhost:8000/storage/uploads/"; // For storage, find out how to do this in express