import { ToastContainer } from "react-toastify";

import NavBar from "./components/Navbar/Navbar";
import { AuthContextProvider } from "./contexts/AuthContext";
import { pwaTrackingListeners } from "./scripts/pwaEventlisteners";

import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

const isBrowser = typeof window !== "undefined";

if (isBrowser) {
  pwaTrackingListeners();
}


function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <NavBar />

        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </AuthContextProvider>
  );
}

export default App;

if (isBrowser && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => {
        console.log("Service worker registered");
      })
      .catch((err) => {
        console.log("Service worker registration failed", err);
      });
  });
}
