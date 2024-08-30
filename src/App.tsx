import "./app.scss";
import ContactScreen from "./container/screens/contact/Contact";
import ParallaxScreen from "./container/screens/Parallax/Parallax";
import PortfolioScreen from "./container/screens/Portfolio/Portfolio";
import ServicesScreen from "./container/screens/services/Services";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <>
      <AllRoutes />
      <section id="Services">
        <ParallaxScreen type="services" />
      </section>
      <section>
        <ServicesScreen />
      </section>
      <section id="Portfolio">
        <ParallaxScreen type="portfolio" />
      </section>
      <PortfolioScreen />
      <section id="Contact">
        <ContactScreen />
      </section>
    </>
  );
}

export default App;
