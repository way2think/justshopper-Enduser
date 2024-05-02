import "./App.css";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.min.css";
import Router from "./Router";
import BackDropWithLoader from "./component/Loader/BackDropWithLoader";
import { selectIsLoadingWithMessage } from "./store/appSlice";
import { useEffect } from "react";

function App() {
  const { isLoading, isLoadingMessage } = useSelector(
    selectIsLoadingWithMessage
  );

  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextmenu);

    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return (
    <div className="App">
      <Router />
      <ToastContainer />
      {isLoading && <BackDropWithLoader message={isLoadingMessage} />}
    </div>
  );
}

export default App;
