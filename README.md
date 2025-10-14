# 📖 Istami‘ Tafuz (React + Vite)

A modern web app for listening to Quran recitations, tafsir, live TV, and radio, built with React, TypeScript, Redux Toolkit, RTK Query, Tailwind CSS, and RESTful APIs.

**Live Demo:** [https://listen-win.vercel.app/](https://listen-win.vercel.app/)

## 🔍 Overview

"Istami‘ Tafuz"is a single-page application (SPA) that enables users to:
- Listen to Quran recitations by all reciters and rewayat
- Listen to tafsir (explanation) for each surah
- Watch videos highlighting tadabor (reflective pauses) in each surah
- Watch videos of selected ayat recitations
- Browse and listen to various Islamic radio stations
- Watch live streams of Quran and Sunnah TV channels

## ✨ Features

- **React + Vite**: Fast development and optimized builds
- **TypeScript**: Type-safe codebase
- **Redux Toolkit & RTK Query**: Global state management and API integration
- **Tailwind CSS**: Modern, responsive UI
- **RESTful APIs**: Dynamic data fetching
- **Component-Based UI**: Modular React components
- **Routing**: Seamless navigation with React Router
- **Loading States**: User-friendly loading indicators

## 📋 Requirements

- Node.js 18+
- npm

## 💾 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arabeen100/listen-win/
   cd listen-win

2. Install dependencies:

npm install

3. Start the development server:

npm run dev

- 📁 Project Structure

listen-win/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Redux store
│   ├── assets/              # Images and media
│   ├── components/          # UI components
│   ├── features/            # API slices and logic
│   ├── hooks/               # Custom hooks
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles
├── [index.html](http://_vscodecontentref_/1)               # Main HTML file
├── [package.json](http://_vscodecontentref_/2)             # Project dependencies and scripts
├── [vite.config.ts](http://_vscodecontentref_/3)           # Vite configuration
├── [README.md](http://_vscodecontentref_/4)                # Project documentation

- 🔰 Basic Usage
🛣️ Adding a Route
Define routes in src/App.tsx:

```ts
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Reciters from "./components/listening/Reciters";
import Radio from "./components/radio/Radio";
import Missing from "./components/Missing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listening" element={<Reciters />} />
      <Route path="/radio/:radioId" element={<Radio />} />
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
```

- 🎮 Creating a Component

```ts
// src/components/ReciterCard.tsx
import React from "react";

type ReciterCardProps = {
  name: string;
  image: string;
  onPlay: () => void;
};

function ReciterCard({ name, image, onPlay }: ReciterCardProps) {
  return (
    <div className="reciter-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <button onClick={onPlay}>Play</button>
    </div>
  );
}

export default ReciterCard;
```
- 📊 Using Redux for State

```ts
// src/features/player/playerSlice.ts
// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // ...other reducers...
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
```

- 🗃️ Data & API
Use RTK Query in src/features/api/apiSlice.ts:

```ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getReciters: builder.query({ query: () => "/reciters" }),
    getRadios: builder.query({ query: () => "/radios" }),
    // ...other endpoints...
  }),
});
```

- 📜 License

MIT License

- 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

- 👩‍💻 Author

**Mahmoud Samy Arabeen**