import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Article from "./components/Article";
import AddArticle from "./components/AddArticle";
import Edit from "./components/EditArticle";
import Preview from "./components/Preview";
import Trash from "./components/Trash";
import Draft from "./components/Draft";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Article />} />
            <Route path="add" element={<AddArticle />}></Route>
            <Route path="edit/:id" element={<Edit />}></Route>
            <Route path="preview/:id" element={<Preview />}></Route>
            <Route path="trash" element={<Trash />}></Route>
            <Route path="draft" element={<Draft />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
