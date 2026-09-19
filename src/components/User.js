import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const { name, email, location } = props;
  return (
    <div>
      <h1>Count:{count}</h1>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{location}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default User;
