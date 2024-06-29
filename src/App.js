import "./App.css";
import PortfolioSection from "./PortfolioSection";
import ProfileHeader from "./ProfileHeader";
import SideBar from "./SideBar";
import IMAGE from "./assets/original-79da4406e6071a986b8536c45c993ffa.png";
function App() {
  return (
    <div className="App">
      <div id="Main-Section " className="mb-10">
        <ProfileHeader />
      </div>
      <div
        id="image-png"
        className="mx-auto w-full md:w-1/2 md:p-2 flex-col md:flex "
      >
        <img src={IMAGE} alt="" className="md:rounded-md w-full" />{" "}
        <div className="lg:block hidden mt-4">
          {" "}
          <SideBar />
        </div>
      </div>

      <div id="Hola" className=" p-2">
        <div className="flex items-center justify-center">
          <div className=" space-y-2 p-2">
            <h1 className="text-2xl text-center font-bold mb-4">
              Hola Designers :)
            </h1>
            <p className="md:w-[95%] md:text-xl md:p-5">
              Concept Design for a personal organizer and a tracker for all your
              work (kinda like Notion :p)
            </p>
            <p className="md:w-[95%] md:text-xl md:p-5">
              Designed this as a 30-minute UI design challenge. Feel free to
              share your thoughts 🤘😁
            </p>
            <p id="reach" className=" md:text-xl md:p-5">
              Reach out at{" "}
              <a href="www.123.com" className="border-b border-purple-600 mb-5">
                shivamrai.xyz
              </a>
            </p>
          </div>
        </div>
        <div className="lg:hidden">
          {" "}
          <SideBar />
        </div>
      </div>

      <PortfolioSection />
    </div>
  );
}

export default App;
