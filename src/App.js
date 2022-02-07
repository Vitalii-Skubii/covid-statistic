import "./App.css";
import Container from "./components/Container";
import CountryList from "./components/CountryList";

function App() {
  return (
    <div className="App">
      <Container>
        <CountryList />
      </Container>
    </div>
  );
}

export default App;
