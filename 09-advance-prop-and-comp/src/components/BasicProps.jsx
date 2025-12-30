import React from "react";

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg transition-all duration-300
       ${size === "small" ? "text-sm px-3 py-1" : ""}
       ${size === "medium" ? "text-lg px-6 py-2" : ""}
        ${size === "large" ? "text-2xl px-8 py-3" : ""}
        ${
          color == "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""
        }        
        ${
          color == "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""
        }        
        ${
          color == "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""
        }        
        ${
          color == "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""
        } 
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}       
        `}
    >
      {text}
    </button>
  );
}
function BasicProps() {
  const [clickCount, setClickCount] = React.useState(0);
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h3 className={` text-3xl font-bold text-gray-700`}>Basic Props</h3>
      <p className={`mt-2`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure dolorum
        fugiat architecto mollitia quis omnis odio consequuntur placeat debitis
        commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
        eligendi iusto nisi temporibus mollitia possimus voluptas facilis esse
        aperiam delectus!
      </p>
      <div className="space-y-4 mb-5 mt-5">
        <h3 className={` text-2xl font-medium mb-2 text-gray-700`}>
          Different colors
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary Button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Secondary Button"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Danger Button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>
      <div className="space-y-4 mb-5">
        <h3 className={` text-2xl font-medium mb-2 text-gray-700`}>
          Different sizes
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Small"
            color="primary"
            size="small"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Medium (Default)"
            color="primary"
            size="medium"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Large"
            color="primary"
            size="large"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>
      <div className="space-y-4 mb-5">
        <h3 className={`text-2xl mb-2 font-medium text-gray-700`}>
          Disabled State
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Enabled"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Disabled"
            color="primary"
            disabled={true}
            onClick={() => alert("This button is disabled")}
          />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-green-100 p-3">
        <p>
          Click Count:{" "}
          <span className="text-blue-500 font-bold">{clickCount}</span>
        </p>
      </div>
    </section>
  );
}

export default BasicProps;
