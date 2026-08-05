let realDomRoot = document.querySelector("#root");
let rootOfReact = ReactDOM.createRoot(realDomRoot);


let div = React.createElement("div", { className: "heading" }, "This is React 0");

rootOfReact.render(div);