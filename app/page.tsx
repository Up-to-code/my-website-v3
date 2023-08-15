import Home_haeder from "./components/Home_haeder";
import Navbar from "./components/Navbar";
import Form_bt from "./components/Form_bt";
import Boxes from "./components/Boxes";
import My_skills from "./components/My_skills";
import Contaner from "./components/Contaner";
import Abuot_me from "./components/Abuot_me";
import Line_news from "./components/Line_news";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Home_haeder/>
      <Form_bt/>
      <Contaner>
      <Boxes/>
      <Boxes/>
      <Boxes/>
      <Boxes/>
      <Boxes/>
      <Boxes/>
      <Boxes/>
      <Boxes/>
      <Boxes/>
      </Contaner>
      <My_skills/>
      <Abuot_me/>
      <Line_news/>
      <Footer/>
    </>
  );
}
