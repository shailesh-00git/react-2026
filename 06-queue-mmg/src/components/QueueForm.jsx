import { useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    //validations
    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service });
    setName("");
    setService("");
  };
  return (
    <form className="inputbox" onSubmit={handlesubmit}>
      <h2>Add to Queue</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        placeholder="Customer name"
      />
      <select
        id="fruits"
        name="fruits"
        value={service}
        onChange={(e) => setService(e.target.value)}
      >
        <option value="">Select Service</option>
        <option value="Consultation">Consultation</option>
        <option value="Payment">Payment</option>
        <option value="Support">Support</option>
      </select>
      <button type="submit" className="add-customer">
        <FaUserPlus />
        <span>Add customer</span>
      </button>
    </form>
  );
}

export default QueueForm;
