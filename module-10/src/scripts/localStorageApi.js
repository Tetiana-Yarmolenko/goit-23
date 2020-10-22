const add = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const get = (key) => {
  const result = localStorage.getItem(key);

  return result ? JSON.parse(result) : undefined;
}

export {add, get};