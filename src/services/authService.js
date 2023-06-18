import http from "./httpService";

export function login(loginState) {
  const LOGIN_END_POINT = "http://localhost:4000/users/login";
  return http.post(LOGIN_END_POINT, loginState);
}

const authService = {
  login,
};

export default authService;
