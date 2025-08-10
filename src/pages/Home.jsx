import BannerImg from "../components/BannerImg";
import FlashSales from "../components/FlashSales";
import Category from "../components/Category";
import ViewAll from "../components/ViewAll";
import Jbl from "../components/Jbl";
import OurProducts from "../components/OurProducts";
import NewArival from "../components/NewArival";
import Services from "../components/services";


const Home = () => {
  return (
    <div>
      <BannerImg/>
      <FlashSales/>
      <Category/>
      <ViewAll/>
      <Jbl/>
      <OurProducts/>
      <NewArival/>
      <Services/>
    </div>
  )
}

export default Home;
