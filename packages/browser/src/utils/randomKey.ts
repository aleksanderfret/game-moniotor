const randomKey = (length = 8): string => {
  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);

  return Array.from(array, v => v.toString(16).padStart(2, '0')).join('');
};

export default randomKey;
