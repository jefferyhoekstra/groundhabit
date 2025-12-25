// IMPORT
import Hero from "./components/Hero/Hero";

// IMAGE

// CSS
import "./App.css";

// FUNCTION
export default function App() {
  return (
    <>
      <section className="app-section">
        <section className="app_header">
          <Hero />
        </section>
        <section className="app_main"></section>
        <section className="app_footer"></section>
      </section>
    </>
  );
}
