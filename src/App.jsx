import React from "react";
import Routes from "./components/Routes";

export const App = () => {
  const apiKey = "c6c7c360f0f76c21a01ef7cbb4f227c7";

  return (
    <div>
      <Routes apiKey={apiKey} />
    </div>
  );
};