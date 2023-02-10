import "./App.css";
import MyNavbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Movies from "./components/Movies.jsx";
import MyFooter from "./components/Footer.jsx";

function App() {
  return (
    <>
      <MyNavbar />
      <Header />
      <Movies title="Marvel" category="Trending Now" />
      <Movies title="Pokemon" category="Watch It Again" />
      <Movies title="Star Wars" category="New Relases" />
      <MyFooter />
    </>
  );
}

export default App;
