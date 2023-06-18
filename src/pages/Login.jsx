import React, { useEffect, useState } from "react";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { login } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { errors } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email", email);
    console.log("Submitted password", password);
    logInUser();
  };

  const logInUser = async () => {
    try {
      const response = await login({ email, password });

      console.log("The response from the server", response);
      toast.info("Login successfully");

      // Storing the token in the localStorage

      localStorage.setItem("loginToken", response.data.data.access_token);

      // Directing the user to the Tables page
      navigate("/Table");
    } catch (ex) {
      console.log("Something went wrong", ex);

      // Checking if the credentials are valid

      if (ex.response && ex.response.status === 400) {
        return toast.error("Invalid credentials");
      }
    }
  };

  useEffect(() => {
    // preventint the user to return to login if already logged in

    if (localStorage.getItem("loginToken")) navigate("/Table");
  }, [navigate]);

  return (
    // Main container
    <div className="flex flex-col md:flex-row">
      {/* Image container */}
      <div className="w-full h-1/2 md:w-1/2 bg-red-400 md:h-screen">
        <img
          src="https://images.unsplash.com/photo-1567263361507-83f755d9fa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdhbGxwYXBlciUyMHdoaXRlJTIwYW5kJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="login"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Login Form */}
      <div className="w-full md:w-1/2  h-screen pl-2 md:pl-10">
        {/* form */}

        <h2 className="font-semibold text-lg mt-[4em]">
          {" "}
          Log in to your account !
        </h2>

        <form
          onSubmit={onSubmit}
          className="flex max-w-md flex-col gap-4 mt-[3em]"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email2"
              placeholder="Enter your email"
              required
            />

            <p className="text-red-600">
              {" "}
              {errors?.name && <div>{errors?.name.message}</div>}
            </p>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password2"
              required
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-600">
              {" "}
              {errors?.name && <div>{errors?.name.message}</div>}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label className="flex" htmlFor="agree">
              <p>I agree with the terms and conditions</p>
            </Label>
          </div>
          <Button type="submit">Log in to your account !</Button>

          <p className="mt-5 text-sm text-gray-600">
            Do not have an account?{" "}
            <Link to="/signup" className="font-semibold text-cyan-700">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
