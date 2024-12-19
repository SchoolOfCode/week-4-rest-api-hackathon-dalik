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

// export async function getAstronautsByName(search) {
//     const lowercased = search.toLowerCase();
//     return astronauts.filter(({ firstName, lastName }) => {
//       return (
//         firstName.toLowerCase().includes(lowercased) ||
//         lastName.toLowerCase().includes(lowercased)
//       );
//     });
//   }

export async function createHoard(newHoard) {
  //take newHoard param
  console.log(newHoard);
  data.push(newHoard);
  //   const createdHoard = "look at this hoard";
  return newHoard;
}
