import "./App.css";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Router from "./Routes/Router";
import { useTheme } from "./Context/ThemeProvider";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App">
      <div className={theme}>
        <Topbar />
        <Navbar />
        <div className="Content_Wrapper">
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
