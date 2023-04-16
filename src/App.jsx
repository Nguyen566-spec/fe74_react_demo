import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DemoContext from "./components/DemoContext";
import DemoProvider from "./components/DemoProvider";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Memo from "./hooks/Memo";
import UseCallback from "./hooks/UseCallback";
import UseDispatch from "./hooks/UseDispatch";
import UseEffect from "./hooks/UseEffect";
import UseMemo from "./hooks/UseMemo";
import UseRef from "./hooks/UseRef";
import UseSelector from "./hooks/UseSelector";
import UseState from "./hooks/UseState";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import User from "./components/User";
import MovieDetail from "./components/MovieDetail";
import Demo from "./toolkit/Demo";

function App() {
  return (
    <>
      {/* <UseState />
      <UseEffect />
      <UseSelector/>
      <UseDispatch/>
      <UseMemo/>
      <UseRef/>
      <DemoContext/>
      <DemoProvider/>
      <Memo/>
    <UseCallback/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user/:id" element={<User />} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="demo" element={<Demo/>}/>
          </Route>
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-selector" element={<UseSelector />} />
          <Route path="/use-dispatch" element={<UseDispatch />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/demo-context" element={<DemoContext />} />
          <Route path="/demo-provider" element={<DemoProvider />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/use-callback" element={<UseCallback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
