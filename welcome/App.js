 //create element using javascript
 
//  const heading = document.createElement("h1");

//  heading.innerHTML = "Welcome to javaScript";

//  const root = document.getElementById("root");

//  root.appendChild(heading);

//create element using React

  const heading = React.createElement(
    "h1",
    { id: "title", src: "react" },
    "Welcome React 1"
  );

  const heading2 = React.createElement(
    "h2",
    { id: "title2", src: "react" },
    "Welcome React 2"
  );

  const container = React.createElement("div", {id : "container", className : "container",}, [heading,heading2]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);