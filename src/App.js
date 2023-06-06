import "./App.css";
import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ErrorMessage } from "./components/ErrorMessage";
import { RecipeDetails } from "./pages/RecipeDetails";
import { SearchResults } from "./pages/SearchResults";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Playground } from "./pages/Playground";
import { ContactUs } from "./pages/ContactUs";

function App() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="recipe/details/:id" element={<RecipeDetails />} />
          <Route path="recipe/details/:id/*" element={<ErrorMessage />} />
          <Route path="/search/:queryTerm" element={<SearchResults />} />
          <Route path="/search/:queryTerm/*" element={<ErrorMessage />} />
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/playground" element={<Playground />}></Route>
          <Route path="*" element={<ErrorMessage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
