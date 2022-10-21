//Componentes
import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpression";
import "./App.css";
import Events from "./components/Events";

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <TemplateExpression />
      <h1>Fundamentos React</h1>

      <Events />
    </div>
  );
}

export default App;
