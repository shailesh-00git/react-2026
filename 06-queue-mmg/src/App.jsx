import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";
import QueueHeader from "./QueueHeader";

function App() {
  const [queue, setQueue] = useState([]);
  const [services, setServices] = useState([
    "Consultation",
    "Payment",
    "Support",
  ]);
  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };
  const addService = (service) => {
    if (!service || !service.trim()) return;
    setServices((prev) => (prev.includes(service) ? prev : [...prev, service]));
  };
  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );
  };
  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  };
  return (
    <div>
      <QueueHeader></QueueHeader>
      {/* main section */}
      <main className="main">
        <QueueForm
          onAdd={addToQueue}
          services={services}
          onAddService={addService}
        ></QueueForm>
        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        ></QueueDisplay>
      </main>
    </div>
  );
}
export default App;
