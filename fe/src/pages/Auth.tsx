import { Alert, Box, Button, InputAdornment, TextField } from "@mui/material";
import { api } from "../utils/api";
import React, { useState } from "react";
import { AxiosError } from "axios";

export default function Auth() {
  const [errMessage, setErrMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

      setLoading(true);

      // Create a FormData object from the form
      const formData = new FormData(e.target as HTMLFormElement);
      const username = formData.get("username") as string;
      const password = formData.get("password") as string;

      // Validate that username and password are not empty
      if (!username || !password) {
        throw new Error("Username and password are required.");
      }

      // Send a PUT request (login) to the server with the username and password
      const res = await api.put("/auth", { username, password });

      // If the server responds with an error, throw an error
      if (!res.status.toString().startsWith("2")) {
        throw new Error(
          res.data.message || "Terjadi kesalahan yang tidak diketahui.",
        );
      }

      // Save the user data to local storage and reload the page
      localStorage.setItem("userData", JSON.stringify(res.data));
      location.reload();
    } catch (err) {
      let errMessage = "Terjadi kesalahan yang tidak diketahui";
      if (err instanceof AxiosError) errMessage = err.response?.data.message;
      setErrMessage(errMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    {/* backup in case we wanna go back to old design bg-[#64CCC5] */}
      <div className="bg-white w-screen h-screen flex justify-center items-center overflow-y-scroll">
        {/* Box */}
        <div className="">
          <img src="Logo.svg" alt="logo" className="mx-auto mb-4" />

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <Box display={`flex`} flexDirection={`column`} alignItems={`center`}>
                <TextField
                  required
                  margin="normal"
                  name="username"
                  label="Username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img
                          src="Person.svg"
                          alt="Person"
                          className="size-6 opacity-50"
                        />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Masukkan username"
                  type="text"
                  variant="outlined"
                  autoComplete="new-password"
                />
                <TextField
                  required
                  margin="normal"
                  name="password"
                  label="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img
                          src="Lock.svg"
                          alt="Lock"
                          className="size-6 opacity-50"
                        />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Masukkan password"
                  type="password"
                  variant="outlined"
                  autoComplete="new-password"
                />

                <br />

                <Button variant="contained" color="primary" type="submit" disabled={loading} fullWidth>
                  Masuk
                </Button>
            </Box>
          </form>

          <br />

          <Alert severity="error" sx={{ width: '100%', display: errMessage ? `` : `none` }} variant="standard">{errMessage}</Alert>
        </div>
      </div>
    </>
  );
}
