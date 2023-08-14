const verifyInput = (name) => {
  if (!name) {
    return `${name} field must not be empty`;
  } else if (name === "username" && name.length < 4) {
    return `${name} must not be less than 4 characters long`;
  } else if (name === "email" && name.length < 6) {
    return "email must be atleast 6 characters";
  } else return name;
};

export { verifyName };

const username = verifyInput(username);
