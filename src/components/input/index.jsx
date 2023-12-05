/* eslint-disable react/prop-types */

const Input = ({ name, type, placeholder, value }) => {
  return (
    <label className="block my-6 relative floated-label">
      <p
        // className={
        //   phoneNumber.length > 0 ? 'float-label-inactive' : 'float-label-active'
        // }
        className="bg-white my-2"
      >
        {placeholder}
      </p>
      <input
        type={type}
        className="w-full py-3 px-4 outline-none focus:outline-none shadow-sm rounded-xl border"
        placeholder={placeholder}
        value={value}
        name={name}
        // onChange={(event) => handleInputChange(event)}
      />
    </label>
  );
};

export default Input;
