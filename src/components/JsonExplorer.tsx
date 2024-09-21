import { useState } from "react";
import "../index.css";
import { Data } from "../data/data";


type Props = {
  res: Data;
};

const JsonExplorer: React.FC<Props> = ({ res }) => {
  const [selectedKey, setSelectedKey] = useState("");
  const [selectedValue, setSelectedValue] = useState<string | boolean>(
    "undefined"
  );

  const INDENT = 10;

  const handleKeyClick = (
    path: string,
    key: string | number | boolean
  ): void => {
    const selected = `${path}.${key}`;
    setSelectedKey(selected);
    setSelectedValue(eval(selected));
  };

  const isPrimitive = (value: any): boolean => {
    return (
      (typeof value !== "object" && typeof value !== "function") ||
      value === null
    );
  };

  const renderJson = (
    data: any,
    path = "res",
    indent = 0,
    isRoot: boolean = true
  ): JSX.Element => {
    if (typeof data !== "object" || data === null) {
      return <span>{JSON.stringify(data)}</span>;
    }

    if (Array.isArray(data)) {
      return (
        <div style={{ marginLeft: `${indent}px` }}>
          {data.map((item: (typeof data)[number], index, array) => (
            <div key={item.prop}>
              {renderJson(item, `${path}[${index}]`, indent + INDENT, false)}
              {index < array.length - 1 ? "," : ""}
            </div>
          ))}
          {"]"}
        </div>
      );
    }

    return (
      <div style={{ marginLeft: `${indent}px` }}>
        {!isRoot && "{"}
        {Object.keys(data).map((key, index, array) => (
          <div style={{ marginLeft: `${indent + INDENT}px` }} key={key}>
            {isPrimitive(data[key as keyof Data]) ? (
              <span className="key" onClick={() => handleKeyClick(path, key)}>
                {`${key}:`}
              </span>
            ) : (
              <span>{`${key}: [`}</span>
            )}{" "}
            {renderJson(data[key as keyof Data], `${path}.${key}`, indent)}
            {index < array.length - 1 ? "," : ""}
          </div>
        ))}
        {!isRoot && "}"}
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="headline">Hey Flow Challenge 02</h1>
      <div className="input-wrapper">
        <label htmlFor="property">property</label>
        <input type="text" value={selectedKey} id="property" name="property"/>
        <span>{String(selectedValue)}</span>
      </div>
      <pre className="response">{renderJson(res)}</pre>
    </div>
  );
};

export default JsonExplorer;
