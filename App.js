const heading = React.createElement("div", null, [
  React.createElement("h1", { id: "header", abc: "def" }, "Hello, Mithun!"),
  React.createElement("h2", null, "This is a simple React app."),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
