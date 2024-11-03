import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header/>
    <div className="company">
      <p>COMPANY</p>
      <b><div className="certificate">Certifications</div></b>
    </div>
    <Footer/>
      </div>
    
  );
}
