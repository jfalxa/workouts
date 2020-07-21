const API_ROOT = "http://localhost:3001";

function api(endpoint) {
  return fetch(API_ROOT + endpoint).then((res) => res.json());
}

export function getAllWorkouts() {
  return api("/workouts");
}

export function getWorkout(id) {
  return api(`/workouts/${id}`);
}
