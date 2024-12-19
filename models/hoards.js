//helper functions are here
import { data } from "../libs/coins.js";

export async function getHoards() {
  return data;
}

export async function createHoard(newHoard) {
  //take newHoard param
  console.log(newHoard);
  data.push(newHoard);
  //   const createdHoard = "look at this hoard";
  return newHoard;
}
