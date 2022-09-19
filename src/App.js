import "./App.css";
import SmallScreen from "./pages/SmallScreen";

function App() {
  return (
    <div>
      <SmallScreen />
      <div className="hidden md:block">Desktop Screen</div>
    </div>
  );
}

export default App;
