import http from "./httpService";

export function getAllVehicles() {
  return http.get("http://localhost:4000/vehicles/all");
}

const vehicleService = {
  getAllVehicles,
};

export default vehicleService;
