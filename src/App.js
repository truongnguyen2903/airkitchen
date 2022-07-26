import "./App.css";
import Form from "./Form";
import ButtonAppBar from "./Navi/ButtonAppBar";
import Nav from "./Navi/Nav";
import Background from "./Navi/Background";
import ImgList from "./ImgList";
import TestGallery from "./Navi/TestGallery";
import ImgList2 from "./ImgList2";

const App = () => {
  return (
    <div>
      <ButtonAppBar />
      <Nav />
      <Background />

      <ImgList />
      {/* <TestGallery /> */}
      <ImgList2 />
    </div>
  );
};
export default App;
