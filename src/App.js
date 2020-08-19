import React from "react";

function Food({ favourite }) {
  return <h1>I Like {favourite}</h1>;
}

function App() {
  return (
    <div>
      <div>Hello!!</div>
      <Food favourit="kimchio" />
      {/* 이거시 prop */}
    </div>
  );
}

export default App;
