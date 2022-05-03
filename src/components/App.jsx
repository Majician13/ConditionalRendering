import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// function renderConditionally() {
//   if (isLoggedIn) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

function App() {
  return (
    <div className="container">
      {
        //BELOW TERNARY LINE DOES SAME AS ABOVE COMMENTED OUT FUNTION RENDERCONDITIONALLY().
        isLoggedIn ? <h1>Hello</h1> : <Login />
      }
    </div>
  );
}

export default App;
