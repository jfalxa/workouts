import { stringify } from "query-string";

const API_ROOT = `http://${window.location.hostname}:3001`;

async function api(endpoint, options) {
  const queryString = options ? "?" + stringify(options) : "";

  const res = await fetch(API_ROOT + endpoint + queryString);
  const contentType = res.headers.get("content-type");

  if (!res.ok && !contentType.includes("application/json")) {
    throw new Error(`Server error ${res.status}`);
  }

  const json = await res.json();

  if (json.error) {
    throw new Error(`API error: ${json.error}`);
  }

  return json;
}

export function getAllWorkouts(options) {
  return api("/workouts", options);
}

export function getWorkout(id) {
  return api(`/workouts/${id}`);
}
