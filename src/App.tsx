
import JsonExplorer from "./components/JsonExplorer";
import { data } from "./data/data";


const App: React.FC = () => {
  return (
    <div>
      <JsonExplorer res={data} />
    </div>
  );
};

export default App;
