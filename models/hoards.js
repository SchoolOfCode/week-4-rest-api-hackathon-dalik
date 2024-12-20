//helper functions are here
import { data } from "../libs/coins.js";

export async function getHoards() {
  return data;
}

// I don't feel great about this, as I don't understand how it works
// It was copied from the getAstronauts by name function
// But includes functionality for partial match, which I'm not sure we need here?
// Might be a simpler way to write it
export async function getHoardsByCounty(county) {
  const lowercased = county.toLowerCase();
  return data.filter(({ county }) => {
    return county.toLowerCase().includes(lowercased);
  });
}

export async function getHoardById(idToFind) {
  console.log("In the back function now");
  console.log(idToFind);
  console.log(typeof idToFind);

  let hoard = null;

  console.log("data.length is");
  console.log(data.length);

  // look at all the hoards
  // take them at one a time
  // examine the key "id" and see it its value matches the id to find
  // if it does, return the whole object (after doing stuff below)
  for (let i = 0; i < data.length; i++) {
    console.log(`examining data[${i}]`);
    console.log("which is");
    //console.log(data[i]);
    console.log("which has .id of");
    console.log(data[i].id);
    console.log(`comparing ${data[i].id} to ${idToFind}`);
    if (data[i].id == idToFind) {
      console.log("found a match");
      return data[i];
    }
  }
  //let hoard = hoard.find(({ id }) => id === Number(idToFind)); // error happening here?

  console.log("couldn't find that hoard by the id. Returning null");
  return null;
}

export async function createHoard(newHoard) {
  //take newHoard param
  console.log(newHoard);
  data.push(newHoard);
  //   const createdHoard = "look at this hoard";
  return newHoard;
}
