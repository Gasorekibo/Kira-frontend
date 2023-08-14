const Button = ({ value }) => {
  return (
    <button
      type="submit"
      className=" bg-primary transition w-72 rounded p-2 hover:bg-secondary"
    >
      {value}
    </button>
  );
};

export default Button;
