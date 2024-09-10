import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
function Page() {
  return (
    <>
      <h1>This is a Test!</h1>
    </>
  );
}

ReactDOM.render(<Page />, document.querySelector("#root"));
