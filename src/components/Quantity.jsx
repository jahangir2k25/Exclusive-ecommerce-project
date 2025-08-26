import { useState } from "react";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  return (
    <div>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={handleChange}
        className="border p-2 w-16 text-center rounded"
      />
    </div>
  );
};

export default QuantityInput;
