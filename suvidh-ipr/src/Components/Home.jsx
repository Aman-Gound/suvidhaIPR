import Boxcontainer from "./Boxcontainer";
import FAQ from "./FAQ";
import Flexcontainer from "./Flexcontainer";
import Heroflex from "./Heroflex";
import Midcontainer from "./Midcontainer";
import Thirdcontainer from "./Thirdcontainer";
import TopHeader from "./TopHeader";
import ConsultationCTA from "./CAT";
import GoogleMap from "./Googlemaps";
const Home = () => {
  return (
    <div className="min-h-screen bg-[#e8eaf0]">
      <TopHeader />
      <Heroflex />
      <Midcontainer />
      <Flexcontainer />
      <Boxcontainer />
      <Thirdcontainer />
      <FAQ />
      <ConsultationCTA />
      <GoogleMap />
    </div>
  );
};
export default Home;
