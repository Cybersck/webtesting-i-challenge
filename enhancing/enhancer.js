module.exports = {
  succeed,
  fail,
  repair,
  get,
};
 
function succeed(item) {
    let newItem = {name: item.name, durability: item.durability, enhancement: item.enhancement};
    if (item.enhancement < 20) {newItem = {...newItem, enhancement: newItem.enhancement+1}}
  return newItem;
}

function fail(item) {
  let newItem = {name: item.name, durability: item.durability, enhancement: item.enhancement}
  if (item.enhancement < 15) {newItem = {...newItem, durability: newItem.durability-5}}
  if (item.enhancement >= 15) {newItem = {...newItem, durability: newItem.durability-10}}
  if (item.enhancement > 16) {newItem = {...newItem, enhancement: newItem.enhancement-1}}
  return newItem;
}

function repair(item) {
  let newItem = {name: item.name, durability: 100, enhancement: item.enhancement}
  return newItem;
}

function get(item) {
  return { ...item };
}
