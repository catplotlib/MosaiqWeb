import "./App.css";
import Header from "./components/Header";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Enterprise from "./Pages/Enterprise";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import ScrollToTop from "./helpers/ScrollToTop";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="About" exact element={<About />} />
          <Route path="Enterprise" exact element={<Enterprise />} />
          <Route path="Privacy" exact element={<Privacy />} />
          <Route path="Terms" exact element={<Terms />} />
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
