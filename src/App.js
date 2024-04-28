import "./App.css";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.min.css";
import Router from "./Router";
import BackDropWithLoader from "./component/Loader/BackDropWithLoader";
import { selectIsLoading } from "./store/appSlice";

function App() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="App">
      <Router />
      <ToastContainer />
      {!isLoading ? <BackDropWithLoader /> : null}
    </div>
  );
}

export default App;
