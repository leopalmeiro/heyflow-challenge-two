import React from "react";
import ReactDOM from "react-dom/client";
import JsonExplorer from "./components/JsonExplorer";
import { data } from "./data/data";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <JsonExplorer res={data} />
  </React.StrictMode>
);
