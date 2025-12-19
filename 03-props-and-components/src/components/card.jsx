function Card({ title = "default", btnText = "Click me", imgUrl }) {
  return (
    <>
      <div className="border-2 max-w-sm bg-white mt-8 overflow-hidden rounded-2xl">
        <img
          className="w-full h-80"
          src={imgUrl}
          alt="sample image"
          title="image"
        />
        <div>
          <h1 className="text-sm pt-3 text-blue-500">{title}</h1>
          <p className="text-gray-900 p-4 text-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, culpa!
            Porro, eum ullam. Vitae nesciunt hic odit provident recusandae
            maxime ipsa consectetur animi, explicabo quas dignissimos vero ex id
            nostrum.
          </p>
          <button className="py-4 px-5 m-2 hover:bg-blue text-white">
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}
export default Card;
