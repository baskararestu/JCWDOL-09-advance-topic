import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Home</p>
      <button
        onClick={() => {
          navigate("/testing");
        }}
      >
        click
      </button>
    </div>
  );
}

export default Home;
