
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App1 from "./App1";
import FindAll from "./Component/FindAll/FindAll";
import FindBookByIsbn from "./Component/FindAll/FindBookByIsbn";
import FindBookByEmail from "./Component/FindAll/FindBookByEmail";
import FindBookSortedByTitle from "./Component/FindAll/FindBookSortedByTitle";
import AddBook from "./Component/FindAll/AddBook";
import Notification from "./Component/ErrorPage/Notification";
import Loading from "./Component/ErrorPage/Loading";


function App() {
  return (
    <>
      <Navbar />
      <Notification />
      <Loading />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App1 />} />
          <Route path="/all-book-magazines" element={<FindAll />} />
          <Route path="/find-book-magazines-by-isbn" element={<FindBookByIsbn />} />
          <Route path="/find-by-author-email" element={<FindBookByEmail />} />
          <Route path="/all-book-magazines-sorted-by-title" element={<FindBookSortedByTitle />} />
          <Route path="/add-book-magazines" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
