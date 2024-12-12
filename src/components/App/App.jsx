import { Routes, Route } from "react-router-dom";
import { SignInPage } from "../../pages/SignInPage/SignInPage.jsx";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<h2>SignUpPage</h2>} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/home" element={<h2>HomePage</h2>} />
      </Routes>
    </div>
  );
};

