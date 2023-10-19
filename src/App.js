import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AndroidSmall11 from "./pages/AndroidSmall11";
import AndroidSmall5 from "./pages/AndroidSmall5";
import Component5 from "./components/Component5";
import Insight1 from "./components/Insight1";
import Rectangle2 from "./components/Rectangle2";
import AndroidSmall1 from "./components/AndroidSmall1";
import Component1 from "./components/Component1";
import AndroidSmall8 from "./pages/AndroidSmall8";
import AndroidSmall4 from "./pages/AndroidSmall4";
import AndroidSmall3 from "./pages/AndroidSmall3";
import AndroidSmall2 from "./pages/AndroidSmall2";
import Frame from "./components/Frame";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/android-small-5":
        title = "";
        metaDescription = "";
        break;
      case "/component-5":
        title = "";
        metaDescription = "";
        break;
      case "/insight-1":
        title = "";
        metaDescription = "";
        break;
      case "/rectangle-5":
        title = "";
        metaDescription = "";
        break;
      case "/android-small-1":
        title = "";
        metaDescription = "";
        break;
      case "/component-1":
        title = "";
        metaDescription = "";
        break;
      case "/android-small-8":
        title = "";
        metaDescription = "";
        break;
      case "/android-small-4":
        title = "";
        metaDescription = "";
        break;
      case "/android-small-3":
        title = "";
        metaDescription = "";
        break;
      case "/android-small-2":
        title = "";
        metaDescription = "";
        break;
      case "/frame-5":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AndroidSmall11 />} />
      <Route path="/android-small-5" element={<AndroidSmall5 />} />
      <Route path="/component-5" element={<Component5 />} />
      <Route path="/insight-1" element={<Insight1 />} />
      <Route path="/rectangle-5" element={<Rectangle2 />} />
      <Route path="/android-small-1" element={<AndroidSmall1 />} />
      <Route path="/component-1" element={<Component1 />} />
      <Route path="/android-small-8" element={<AndroidSmall8 />} />
      <Route path="/android-small-4" element={<AndroidSmall4 />} />
      <Route path="/android-small-3" element={<AndroidSmall3 />} />
      <Route path="/android-small-2" element={<AndroidSmall2 />} />
      <Route path="/frame-5" element={<Frame />} />
    </Routes>
  );
}
export default App;
