import "./App.css";
import { CustomButton } from "./components/html/Button";
import { CustomInput } from "./components/html/Input";

function App() {
  return (
    <div className="App">
      <CustomButton
        variant="primary"
        type="submit"
        onClick={() => console.log("Clicked")}
      >
        Primary Button
      </CustomButton>
      <CustomInput />
    </div>
  );
}

export default App;
