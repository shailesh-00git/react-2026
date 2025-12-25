import React from "react";
import "./App.css";

function App() {
  const [list, setList] = React.useState([]);
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || age === "") return;

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      age: Number(age),
      status: "waiting",
    };

    setList([...list, newUser]);
    setName("");
    setAge("");
  };

  function handleDelete(id) {
    setList(list.filter((user) => user.id !== id));
  }

  function handleServe(id) {
    setList(
      list.map((user) => {
        if (user.id !== id) return user;

        if (user.status === "waiting") return { ...user, status: "serving" };

        if (user.status === "serving") return { ...user, status: "completed" };

        return user;
      })
    );
  }

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
      {!list.length ? (
        <p>No user</p>
      ) : (
        <div className="card-container">
          {list.map((user) => (
            <div className="card" key={user.id}>
              <h4>{user.name}</h4>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p className={`status ${user.status}`}>
                {user.status}
                {user.status !== "completed" && "...."}
              </p>

              <div className="actions">
                {user.status !== "completed" && (
                  <button
                    className="serve-btn"
                    onClick={() => handleServe(user.id)}
                  >
                    {user.status === "waiting" ? "Serve" : "Complete"}
                  </button>
                )}

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
