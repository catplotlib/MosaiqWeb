import "./App.css";
import Header from "./components/Header";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Enterprise from "./Pages/Enterprise";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="About" exact element={<About />} />
          <Route path="Enterprise" exact element={<Enterprise />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// {/* <Router>
//         <Routes>
//           <Route path="/" exact>
//             <Main />
//           </Route>
//           <Route path="/about">{/* <About /> */}</Route>
//           <Route path="/users">{/* <Users /> */}</Route>
//         </Routes>
//       </Router> */}
