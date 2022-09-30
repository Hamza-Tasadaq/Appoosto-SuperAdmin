function setItem(key, value) {
  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = value;
  localStorage.setItem(key, JSON.stringify(item));
}

function getItem(key) {
  const itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);

  return item;
}

function clearItem(key) {
  localStorage.removeItem(key);
}

export { setItem, getItem, clearItem };
