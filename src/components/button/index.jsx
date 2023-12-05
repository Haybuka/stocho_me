/* eslint-disable react/prop-types */

const Button = ({
  text,
  handleClick,
  classAdd,
  disabled = false,
  type = 'submit',
  isSubmitting,
}) => {
  return isSubmitting ? (
    <div className="loader"></div>
  ) : (
    <button
      disabled={disabled}
      onClick={handleClick}
      type={type}
      className={`capitalize block rounded-xl w-full disabled:bg-blue-200 bg-stochostech py-3 text-white font-semibold tracking-wider text-center cursor-pointer ${classAdd} `}
    >
      {text}
    </button>
  );
};

export default Button;
