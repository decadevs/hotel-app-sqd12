import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./components/common/ErrorBoundary";
import AuthContext from "./context/auth/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  //  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback= "loading"/>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </ErrorBoundary>
  //  </React.StrictMode>
);
=======
  <React.StrictMode>
    <AuthContext>
      <ErrorBoundary>
        <Suspense fallback="loading">
          <App />
        </Suspense>
      </ErrorBoundary>
    </AuthContext>
  </React.StrictMode>
);
>>>>>>> 5574e4cdcf8bb57549f7eb1df36cab49ba916555
