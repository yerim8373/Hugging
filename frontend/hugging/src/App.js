import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./pages/user/UserLogin.js";
import CounselorLogin from "./pages/counselor/CounselorLogin";
import RegisterCategory from "./pages/user/RegisterCategory";
import RegisterProfile from "./pages/user/RegisterProfile";
// import Navbar from "./components/ui/NavBar";
// import Nav from "./components/ui/Nav";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import MyCalendar from "./components/counselor/MyCalendar";
import Location from "./components/main/Location";
import RedirectUri from "./pages/user/RedirectUri";
import MediaView from "./pages/media/MediaView";
import MusicPlayingPage from "./pages/media/MusicPlayingPage";
import TopicMediaPage from "./pages/media/TopicMediaPage";
import ReserveCounsel from "./pages/counsel/ReserveCounsel";
import SelectCounsel from "./pages/counsel/SelectCounsel";
import CounselMetaverse from "./pages/counsel/CounselMetaverse";
import CounselProfile from "./pages/counsel/CounselProfile";
import ListCounselor from "./pages/counsel/ListCounselor";
import MainPage from "./pages/main/MainPage";
import CounselorMypage from "./pages/counselor/CounselorMypage";
import CounselDone from "./pages/counsel/CounselDone";
import MissionStart from "./pages/mission/MissionStart";
import Timer from "./components/mission/Timer";
import MissionList from "./pages/mission/MissionList";
import MissionManagement from "./pages/mission/MissionManagement";
// import scrollbar from 'smooth-scrollbar';

// // smooth scroll 설정
// scrollbar.init(document.querySelector('#smooth-scroll'));

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Nav/> */}
      {/* <Location></Location> */}
      <Routes>
        {/* <MyCalendar></MyCalendar> */}
        <Route path="/redirecturi" element={<RedirectUri />} />
        <Route path="/location" element={<Location />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/counselor/login" element={<CounselorLogin />} />
        <Route path="/counselor/mypage" element={<CounselorMypage />} />
        <Route path="/category" element={<RegisterCategory />} />
        <Route path="/profile" element={<RegisterProfile />} />
        <Route path="/profile_img" element={<></>}></Route>
        <Route path="/recommend_media" element={<MediaView />} />
        <Route path="/playing_music:musicId" element={<MusicPlayingPage />} />
        <Route
          path="/TopicMediaPage/:categoryId"
          element={<TopicMediaPage />}
        />
        <Route path="/counselreserve" element={<ReserveCounsel />} />
        <Route path="/" element={<UserLogin />} />
        <Route path="/counselselect" element={<SelectCounsel />}></Route>
        <Route path="/counselmetaverse" element={<CounselMetaverse />}></Route>
        <Route
          path="/counselprofile/:counselorId"
          element={<CounselProfile />}
        ></Route>
        <Route path="/counselreserve" element={<ReserveCounsel />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/counselorlist" element={<ListCounselor />}></Route>
        <Route path="/counseldone" element={<CounselDone />}></Route>
        <Route path="/missionstart" element={<MissionStart />}></Route>
        <Route path="/timer" element={<Timer />}></Route>
        <Route path="/missionlist" element={<MissionList />}></Route>
        <Route
          path="/mission/management"
          element={<MissionManagement />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
