import Header from "./components/Header";
import Meme from "./components/Meme";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="content-container">
        <Header />
        <Meme />
      </div>
      <Footer />
    </div>
  );
}

export default App;
