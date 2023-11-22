import "./App.css";
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div>
      <Navbar />
      <SignupForm />
    </div>
  );
}

export default App;
