import "./App.css";

function App() {
  return (
    <>
      <h1 class="text-blue-300 border-2 p-4">
        Learn to integrate css in react from tailwind
      </h1>
      <div className="border-2 max-w-sm bg-white mt-8 overflow-hidden rounded-2xl">
        <img
          className="w-full h-80"
          src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="sample image"
        />
        <div>
          <h1 className="text-sm pt-3 text-blue-500">Heading of card</h1>
          <p className="text-gray-900 p-4 text-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, culpa!
            Porro, eum ullam. Vitae nesciunt hic odit provident recusandae
            maxime ipsa consectetur animi, explicabo quas dignissimos vero ex id
            nostrum.
          </p>
          <button className="py-4 px-5 m-2 hover:bg-blue text-white">
            Buy now
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
