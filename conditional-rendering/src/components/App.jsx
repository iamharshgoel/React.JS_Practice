import React from "react";
import Login from "./Login"

var isLoggedIn = true;


function App() {
  return (
    <div className="container">{
      //Ternary Operator
    isLoggedIn === true ?  <h1>Hello</h1>: <Login />
    }

    {//&& Operator
     // isLoggedIn === true && <h1>Hello</h1>
    }


     
    </div>
  );
}

export default App;
