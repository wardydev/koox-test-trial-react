import { Layout } from "../components";
import IMGApple from "../assets/images/apple.png";
import IMGOrange from "../assets/images/orange.png";
import IMGWatermelon from "../assets/images/watermelon.png";

const App = () => {
  return (
    <Layout>
      <div>
        <div id="section-1" className="home-item_page page-1">
          <h1>Juice Farmacy</h1>
        </div>
        <div id="section-2" className="home-item_page page-2">
          <img src={IMGApple} alt="img-fruit" />
          <div className="page-2_container">
            <p>02</p>
            <div>
              <h1>100% Organic</h1>
            </div>
            <div>
              <h1>Certified by Sosil Association</h1>
            </div>
          </div>
        </div>
        <div id="section-3" className="home-item_page page-3">
          <img src={IMGOrange} alt="img-fruit" />
          <div className="page-3_container">
            <p>03</p>
            <h1>Cold Pressed</h1>
          </div>
        </div>
        <div id="section-4" className="home-item_page page-4">
          <img src={IMGWatermelon} alt="img-fruit" />
          <div className="page-4_container">
            <p>04</p>
            <h1>Unpasteurised No HPP</h1>
          </div>
        </div>
        <div id="section-5" className="home-item_page page-5">
          <div className="page-5_container">
            <h1>Menu</h1>
            <p>Discover Now</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
