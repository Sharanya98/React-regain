import { createRoot } from "react-dom/client";
import SearchParam from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParam name="Luna" animal="dog" breed="Havanese" />
      <SearchParam name="Pepper" animal="bird" breed="Cockatiel" />
      <SearchParam name="Doink" animal="cat" breed="Mix" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);