/* import React from "react";
import ReactDOM from "react-dom/client";

const headerElement = React.createElement(
   "div",
   {className:"title"},
   [
      React.createElement("h1", {}, "Heading tag 1"),
      React.createElement("h2", {}, "Heading tag 2"),
      React.createElement("h3", {}, "Heading tag 3"),
   ]
);

const headerJSX = (
   <div className="title">
      <h1>JSX Heading Tag 1</h1>
      <h2>JSX Heading Tag 2</h2>
      <h3>JSX Heading Tag 3</h3>
   </div>
);


const TitleComponent = () => (
   <div>
      <h1>Title Heading 1</h1>
      <h2>Title Heading 2</h2>
      <h3>Title Heading 3</h3>
   </div>
);


const HeadingComponent = () => (
   <div id="container">
      {headerElement}
      {headerJSX}
      {TitleComponent()}
   </div> 
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);


/* const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headerElement);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(headerJSX); */ 