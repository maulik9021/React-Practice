import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id : "parent" }, [
   React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "This is h1 tag"),
      React.createElement("h1", {}, "This is develop by Maulik"),
   ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
