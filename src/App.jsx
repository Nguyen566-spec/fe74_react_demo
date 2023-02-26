import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Home />
      <Header />
      <div className="demo">
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
