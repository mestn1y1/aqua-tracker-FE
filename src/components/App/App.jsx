import { Routes, Route } from "react-router-dom";
import { SignInPage } from "../../pages/SignInPage/SignInPage.jsx";



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>WelcomePage</h1>} />
      <Route path="/signup" element={<h2>SignUpPage</h2>} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/home" element={<h2>HomePage</h2>} />
    </Routes>
  );
};

