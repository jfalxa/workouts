const API_ROOT = "http://localhost:3001";

export function getAllWorkouts() {
  return fetch(API_ROOT + "/workouts").then((res) => res.json());
}
