import { useRef, forwardRef } from "react";

//input component
const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium front-mb">
        {label}
      </label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:blue-500 ${className}`}
      />
    </div>
  );
});

function Button({ text, color, onClick }) {
  return (
    <button
      className={`px-6 py-2 rounded-lg transition-all duration-300
        ${
          color == "green" ? "bg-green-500 text-white hover:bg-green-600" : ""
        }        
        ${
          color == "purple"
            ? "bg-purple-500 text-white hover:bg-purple-600"
            : ""
        }        
        ${
          color == "red" ? "bg-red-500 text-white hover:bg-red-600" : ""
        }        
              
        `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getInputValue = () => {
    if (inputRef.current.value) {
      alert(`Input value: ${inputRef.current.value}`);
    }
  };
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };
  const focusInputSecond = () => {
    secondInputRef.current?.focus();
  };
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Ref props</h2>
      <p className="text-gray-600 mb-6">
        Complex props allow you to pass nested objects and functions, enabling
        sophisticated component configurations and interactions.
      </p>

      <div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">
            Try it out?
          </h3>
          <CustomInput
            ref={inputRef}
            label="First Input with ref"
            placeholder="Type something ..."
          />
          <CustomInput
            ref={secondInputRef}
            label="Second Input with ref"
            placeholder="Type something else ..."
          />
          <div className="flex flex-wrap mt-4 gap-3 bg-green-100 py-5 px-5 rounded-xl">
            <Button
              text="Focus first input"
              color="green"
              onClick={focusInput}
            />
            <Button
              text="Focus second input"
              color="green"
              onClick={focusInputSecond}
            />
            <Button
              text="Get second input"
              color="purple"
              onClick={getInputValue}
            />
            <Button text="Clear first input" color="red" onClick={clearInput} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RefProps;
