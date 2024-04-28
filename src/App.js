import "./App.css";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.min.css";
import Router from "./Router";
import BackDropWithLoader from "./component/Loader/BackDropWithLoader";
import { selectIsLoadingWithMessage } from "./store/appSlice";

function App() {
  const { isLoading, isLoadingMessage } = useSelector(
    selectIsLoadingWithMessage
  );

  return (
    <div className="App">
      <Router />
      <ToastContainer />
      {isLoading && <BackDropWithLoader message={isLoadingMessage} />}
    </div>
  );
}

export default App;
