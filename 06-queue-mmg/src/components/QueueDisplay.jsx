import { IoPersonRemoveSharp } from "react-icons/io5";

function QueueDisplay({ queue, onUpdateStatus, onRemove }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "#FF0000";
      case "serving":
        return "#00FF00";
      case "completed":
        return "#0000FF";
    }
  };
  return (
    <div className="displaybox">
      <h2>Current Queue</h2>
      {queue.length === 0 ? (
        <p>No customer</p>
      ) : (
        <div className="content-area">
          {queue.map((customer) => {
            const statusColor = getStatusColor(customer.status);
            return (
              <div className="content" key={customer.id}>
                <div className="content-left">
                  <h3>{customer.name}</h3>
                  <p>Service: {customer.service}</p>
                  <p className="status-label" style={{ color: statusColor }}>
                    {customer.status}
                  </p>
                </div>
                <div className="content-right">
                  {customer.status === "waiting" && (
                    <button
                      className="btn"
                      onClick={() => onUpdateStatus(customer.id, "serving")}
                    >
                      Serve
                    </button>
                  )}
                  {customer.status === "serving" && (
                    <button
                      className="btn"
                      onClick={() => onUpdateStatus(customer.id, "completed")}
                    >
                      Complete
                    </button>
                  )}
                  {customer.status === "completed" && (
                    <button
                      className="btn"
                      onClick={() => onUpdateStatus(customer.id, "waiting")}
                    >
                      Reset
                    </button>
                  )}
                  <button
                    className="btn remove-btn"
                    onClick={() => onRemove(customer.id)}
                    title="Remove customer"
                  >
                    <IoPersonRemoveSharp />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;
