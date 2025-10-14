import { Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import Layout from "./components/Layout"
import Reciters from "./components/listening/Reciters"
import Reciter from "./components/listening/Reciter"
import Surah from "./components/listening/Surah"
import Live from "./components/live/Live"
import SuwarForTadabor from "./components/tadabor/SuwarForTadabor"
import Tadabor from "./components/tadabor/Tadabor"
import Tadaborat from "./components/tadabor/Tadaborat"
import SuwarForTafsir from "./components/tafsir/SuwarForTafsir"
import Tafsir from "./components/tafsir/Tafsir"
import VideoTypes from "./components/visual/VideoTypes"
import Videos from "./components/visual/Videos"
import Missing from "./components/Missing"
import Video from "./components/visual/Video"
import Radios from "./components/radio/Radios"
import Radio from "./components/radio/Radio"
import Lives from "./components/live/Lives"
function App() {

  return (
   
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="listening" >
            <Route index element={<Reciters />} />
            <Route path="reciter/:reciterId" >
              <Route index element={<Reciter />} />
              <Route path="surah/:surahId" element={<Surah />} />
            </Route>
          </Route>
          <Route path="live">
            <Route index element={<Lives />} />
            <Route path=":liveId" element={<Live />} />
          </Route>
          <Route path="tadabor">
            <Route index element={<SuwarForTadabor />} />
            <Route path="surah/:surahId" >
              <Route index element={<Tadaborat />} />
              <Route path="tadabor/:tadaborId" element={<Tadabor />} />
            </Route>
          </Route>
          <Route path="tafsir">
            <Route index element={<SuwarForTafsir />} />
            <Route path="surah/:surahId" element={<Tafsir />} />
          </Route>
          <Route path="videos">
            <Route index element={<VideoTypes />} />
            <Route path="type/:typeId" >
              <Route index element={<Videos />} />
              <Route path="video/:videoId" element={<Video />} />
            </Route>
          </Route>
          <Route path="radio">
            <Route index element={<Radios />} />
            <Route path=":radioId" element={<Radio />} />
          </Route>
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>

  )
}

export default App
