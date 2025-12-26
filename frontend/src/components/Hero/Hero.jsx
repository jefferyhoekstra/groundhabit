// IMPORT

// IMAGE
import logo from "../../assets/images/Hero/logo.png";

// CSS
import "./hero.css";

// FUNCTION
export default function Hero() {
  return (
    <>
      <section className="hero-section">
        <img src={logo} alt="" />
        <div className="hero">
          <h1>GroundHabit</h1>
          <p>A community rooted in realness.</p>
        </div>
      </section>
    </>
  );
}
