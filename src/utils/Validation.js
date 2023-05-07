const isEmpty = (value) => {
  if (value.trim() !== "") {
    return false;
  } else {
    return true;
  }
};

export { isEmpty };
