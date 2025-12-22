import { useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { IoPersonRemoveSharp } from "react-icons/io5";

function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = () => {};
  const updateStatus = () => {};
  const removeFromQueue = () => {};
  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center" }}>Queue Management Application</h1>
        <p style={{ textAlign: "center", marginBottom: "50px" }}>
          Manage your customers efficiently
        </p>
      </header>

      {/* main section */}
      <main className="main">
        <div className="inputbox">
          <h2>Add to Queue</h2>
          <input type="text" name="name" placeholder="Customer name" />
          <select id="fruits" name="fruits">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
          </select>
          <button class="add-customer">
            <FaUserPlus />
            <span>Add customer</span>
          </button>
        </div>
        <div className="displaybox">
          <h2>Current Queue</h2>
          <div class="content-area">
            {" "}
            <div class="content">
              <div className="content-left">
                <h3>shailesh yadav</h3>
                <p>Service: payment</p>
                <p class="status-complete">completed</p>
              </div>
              <div className="content-right">
                <button class="btn">serve</button>
                <span>
                  <IoPersonRemoveSharp />
                </span>
              </div>
            </div>
            <div class="content">
              <div className="content-left">
                <h3>shailesh yadav</h3>
                <p>Service: payment</p>
                <p class="status-complete">completed</p>
              </div>
              <div className="content-right">
                <button class="btn">serve</button>
                <span>
                  <IoPersonRemoveSharp />
                </span>
              </div>
            </div>
            <div class="content">
              <div className="content-left">
                <h3>shailesh yadav</h3>
                <p>Service: payment</p>
                <p class="status-complete">completed</p>
              </div>
              <div className="content-right">
                <button class="btn">serve</button>
                <span>
                  <IoPersonRemoveSharp />
                </span>
              </div>
            </div>
            <div class="content">
              <div className="content-left">
                <h3>shailesh yadav</h3>
                <p>Service: payment</p>
                <p class="status-complete">completed</p>
              </div>
              <div className="content-right">
                <button class="btn">serve</button>
                <span>
                  <IoPersonRemoveSharp />
                </span>
              </div>
            </div>
            <div class="content">
              <div className="content-left">
                <h3>shailesh yadav</h3>
                <p>Service: payment</p>
                <p class="status-complete">completed</p>
              </div>
              <div className="content-right">
                <button class="btn">serve</button>
                <span>
                  <IoPersonRemoveSharp />
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
