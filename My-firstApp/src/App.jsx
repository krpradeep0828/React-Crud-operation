import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Page from "./Page";
import Home from "./Home";
import ViewData from "./ViewData";
import InsertData from "./components/InsertData";
import UpdateData from "./UpdateData";
import EditData from "./EditData";
import DeleteData from "./DeleteData";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <Navigation />
          <div className="mid col-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/insert" element={<InsertData />} />
              <Route path="/view" element={<ViewData />} />
              <Route path="/update" element={<UpdateData/>} />
              <Route path="/update/edit" element={<EditData/>} />
              <Route path="/update/edit/:id" element={<EditData/>} />

              <Route path="/delete" element={<DeleteData/>} />
              <Route path="/delete/:id" element={<DeleteData/>} />
              
              <Route path="*" element={<h1>page not found </h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
