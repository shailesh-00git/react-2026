function Cards({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-100",
    green: "border-green-500 bg-green-100",
    red: "border-red-500 bg-red-100",
    purple: "border-purple-500 bg-purple-100",
  };
  return (
    <div
      className={`border-l-5 p-6 rounded-lg shadow-md  ${colorClasses[color]}`}
    >
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function Container({ children, layout = "verticle" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: " flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };
  return <div className={`${layoutClasses[layout]}`}>{children}</div>;
}
function ChildernProps() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h3 className={` text-3xl font-bold text-gray-700`}>Childern Props</h3>
      <p className={`mt-2`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure dolorum
        fugiat architecto mollitia quis omnis odio consequuntur placeat debitis
        commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
        eligendi iusto nisi temporibus mollitia possimus voluptas facilis esse
        aperiam delectus!
      </p>
      <div className="space-y-6">
        <div>
          <h3 className="font-medium my-4 text-gray-700 text-2xl ">
            Card component with children
          </h3>
          <Container layout="grid">
            <Cards title="User Profile" color="blue">
              <p className="mb-2">
                <strong>Name:</strong>Shailesh
              </p>
              <p className="mb-2">
                <strong>Email:</strong>Shailesh@gmail.com
              </p>
              <p className="mb-2">
                <strong>Role:</strong>Developer
              </p>
            </Cards>
            <Cards title="Statistics" color="green">
              <p className="mb-2 flex justify-between">
                <span>Total User:</span>
                <strong>1,234</strong>
              </p>
              <p className="mb-2 flex justify-between">
                <span>Active Sessions:</span>
                <strong>34</strong>
              </p>
              <p className="mb-2 flex justify-between">
                <span>Revenue:</span>
                <strong>$56,234</strong>
              </p>
            </Cards>
            <Cards title="Quick Actions" color="red">
              <div className=" flex gap-4 flex-col">
                <button className="py-2 bg-purple-600 text-amber-50 font-medium rounded-md">
                  Create New
                </button>
                <button className="py-2 bg-gray-500  text-white font-medium rounded-md ">
                  View All
                </button>
              </div>
            </Cards>
            <Cards title="Warning" color="purple">
              <p className="mb-2">
                Your trail period ends in 5 days. Pleasse upgrade your account
                to use all ypur features.
              </p>
            </Cards>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default ChildernProps;
