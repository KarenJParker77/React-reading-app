// payload = actual contents we want to store
// function below gives a name and the data and stores item in disk using that name
export function storeItem(name, payload) {
  // defensive check below - if payload isn't an object or doesn't have a name, or name undefined or null
  if (!name || typeof payload !== "object") {
    console.log("You're not sending what I need");
    return;
  }
  // need to store strings in local storage, can't store objects

  const payloadAsString = JSON.stringify(payload);
  localStorage.setItem(name, payloadAsString);
}
// goes to disk, gets named item we want and then turns back into object and gives us it
export function getItem(name) {
  return JSON.parse(localStorage.getItem(name));
}
