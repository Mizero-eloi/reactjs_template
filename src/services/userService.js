import http from "./httpService";

export function register(signupState) {
  return http.post("http://localhost:4000/users/admin/register", signupState);
}

const userService = {
  register,
};

export default userService;
