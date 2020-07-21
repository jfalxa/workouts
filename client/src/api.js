import { stringify } from "query-string";

const API_ROOT = `http://${window.location.hostname}:3001`;

function api(endpoint, options) {
  const queryString = options ? "?" + stringify(options) : "";
  return fetch(API_ROOT + endpoint + queryString).then((res) => res.json());
}

export function getAllWorkouts({ page, limit }) {
  return api("/workouts", { page, limit });
}

export function getWorkout(id) {
  return api(`/workouts/${id}`);
}
