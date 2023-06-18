import React, { useEffect, useState } from "react";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { register } from "./../services/userService";

const Signup = () => {
  const { errors } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [nationalId, setNationalId] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  const registerUser = async () => {
    try {
      const response = await register({
        email,
        password,
        firstname,
        lastname,
        phone,
        nationalId,
      });

      console.log("The response from the server", response);
      toast.info("Registered successfully");
    } catch (ex) {
      console.log("Something went wrong", ex);

      // Checking if the credentials are valid

      if (ex.response && ex.response.status === 400) {
        return toast.error("Something went wrong");
      }
    }
  };

  useEffect(() => {
    console.log("Email", email);
  }, [email]);

  return (
    // Main container
    <div className="flex flex-col md:flex-row">
      {/* Image container */}
      <div className="w-full h-1/2 md:w-1/2 bg-red-400 md:h-screen">
        <img
          src="https://images.unsplash.com/photo-1567263361509-e0dac85b450b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdhbGxwYXBlciUyMHdoaXRlJTIwYW5kJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="login"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Login Form */}
      <div className="w-full md:w-1/2  h-screen overflow-y-scroll pl-2 md:pl-10">
        {/* form */}

        <h2 className="font-semibold text-lg mt-[4em]">
          {" "}
          Welcome, Create your account
        </h2>

        <form
          onSubmit={onSubmit}
          className="flex max-w-md flex-col gap-4 mt-[3em] "
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstname" value="First name" />
            </div>
            <TextInput
              id="firstname"
              placeholder="first name"
              required
              shadow
              type="string"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />

            <p className="text-red-600">
              {" "}
              {errors?.name && <div>{errors?.name.message}</div>}
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastname" value="Last name" />
            </div>
            <TextInput
              id="lastname"
              placeholder="last name"
              required
              shadow
              type="string"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />

            <p className="text-red-600">
              {" "}
              {errors?.name && <div>{errors?.name.message}</div>}
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Phone number" />
            </div>
            <TextInput
              id="phone"
              placeholder="phone"
              required
              shadow
              type="string"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <p className="text-red-600">
              {" "}
              {errors?.name && <div>{errors?.name.message}</div>}
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              placeholder="enter your email"
              required
              shadow
              type="string"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className="text-red-600">
              {" "}
              {errors?.name && <div>{errors?.name.message}</div>}
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="nationalId" value="National Id" />
            </div>
            <TextInput
              id="nationalId"
              placeholder="enter your National Id"
              required
              shadow
              type="number"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
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
              shadow
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-cyan-700">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
