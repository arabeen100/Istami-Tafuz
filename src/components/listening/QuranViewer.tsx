import { useMemo, useState, useEffect } from "react";
const flipSound = new Audio("/sounds/flip.mp3.wav");

export default function QuranViewer({ id,suwar }:any) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<string>("next");
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 976);
  const selectedSurah = useMemo(() => {
    return suwar?.suwar?.find((surah:any) => String(surah.id) === String(id));
  }, [suwar, id]);

  const pages = useMemo(() => {
    if (!selectedSurah) return [];
    const { start_page, end_page } = selectedSurah;
    const list = [];
    for (let i = start_page; i <= end_page; i++) {
      list.push(`https://istami-tafuz.vercel.app//quran-webp/pages/${i}.webp`);
    }
    return list;
  }, [selectedSurah]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 976);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const playFlipSound = () => {
    try {
      flipSound.currentTime = 0;
      flipSound.play();
    } catch (err) {
      console.warn("تعذر تشغيل الصوت:", err);
    }
  };

  useEffect(() => {
    const leftPage = document.getElementById("page-left");
    const rightPage = document.getElementById("page-right");
    [leftPage, rightPage].forEach((el) => {
      if (!el) return;
      el.classList.remove("flip-next", "flip-prev");
      void el.offsetWidth;
      el.classList.add(direction === "next" ? "flip-next" : "flip-prev");
    });
  }, [currentIndex, direction]);

  const goNext = () => {
    const step = isMobile ? 1 : 2;
    if (currentIndex < pages.length - step) {
      setDirection("next");
      setCurrentIndex((prev) => prev + step);
      playFlipSound();
    }
  };

  const goPrev = () => {
    const step = isMobile ? 1 : 2;
    if (currentIndex >= step) {
      setDirection("prev");
      setCurrentIndex((prev) => prev - step);
      playFlipSound();
    }
  };

  if (!selectedSurah) return <p>❌ السورة غير موجودة</p>;

  return (
    <div className="flex flex-col rounded-lg border-2 border-text items-center gap-4 w-full bg-primary">
      <h1 className="text-2xl font-bold mb-4 pt-5 text-text">سورة {selectedSurah.name}</h1>

      <div className="relative flex justify-center gap-4 w-[80%] md:w-[50%] max-w-5xl bg-white">
        <img
          id="page-right"
          src={pages[currentIndex]}
          alt={`صفحة ${currentIndex + 1}`}
          className="w-full max-w-md rounded-lg shadow-lg transition-transform duration-700 bg-secondary"
        />

        {!isMobile && currentIndex + 1 < pages.length && (
          <img
            id="page-left"
            src={pages[currentIndex + 1]}
            alt={`صفحة ${currentIndex + 2}`}
            className="w-full max-w-md rounded-lg shadow-lg transition-transform duration-700 bg-secondary"
          />
        )}
      </div>

      <div className="flex justify-between w-full max-w-lg mt-4 px-5">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-secondary text-text rounded disabled:opacity-50"
        >
          ➡️ السابق
        </button>
        <button
          onClick={goNext}
          disabled={currentIndex >= pages.length - (isMobile ? 1 : 2)}
          className="px-4 py-2 bg-secondary text-text rounded disabled:opacity-50"
        >
          التالي ⬅️
        </button>
      </div>

      <p className="text-text pb-5">
        صفحة {currentIndex + 1}
        { !isMobile && currentIndex + 1 < pages.length && ` - ${currentIndex + 2}` }
        &nbsp;من {pages.length}
      </p>
    </div>
  );
}
