import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Surah {
  id: number;
  name: string;
  start_page: number;
  end_page: number;
  makkia: number;
  type: number;
}

interface SuwarResponse {
  suwar: Surah[];
}
interface SuwarParams {
  language?: string;
}
interface Riwaya {
  id: number;
  name: string;
}

interface RiwayatResponse {
  riwayat: Riwaya[];
}
interface RiwayatParams {
  language?: string;
}
interface Moshaf {
  id: number;
  moshaf_type: number;
  moshaf_id: number;
  name: string;
}

interface MoshafResponse {
  riwayat: Moshaf[];
}
interface MoshafParams {
  language?: string;
}
interface MoshafItem {
  id: number;
  name: string;
  server: string;
  surah_total: number;
  moshaf_type: number;
  surah_list: string;
}

interface Reciter {
  id: number;
  name: string;
  letter: string;
  date: string;
  moshaf: MoshafItem[];
}

interface RecitersResponse {
  reciters: Reciter[];
}
interface RecitersParams {
  language?: string;
  reciter?: number;
    rewaya?: number;
    sura?: number;
    last_update_date?: string;
}
interface LiveTvItem {
  id: number;
  name: string;
  url: string;
}

interface LiveTvResponse {
  livetv: LiveTvItem[];
}
interface LiveTvParams {
  language?: string;
}
interface Radio {
  id: number;
  name: string;
  url: string;
  recent_date: string;
}

interface RadiosResponse {
  radios: Radio[];
}
interface RadiosParams {
  language?: string;
    last_update_date?: string;
}
interface TafsirItem {
  id: number;
  tafsir_id: number;
  name: string;
  url: string;
  sura_id: number;
}

interface Tafasir {
  name: string;
  soar: {
    [key: string]: TafsirItem[];
  };
}

interface TafasirResponse {
  tafasir: Tafasir;
}
interface TafsirParams {
  tafsir: number;
    sura?: number;
    language?: string;
}
interface TadaborItem {
  id: number;
  audio_url: string | null;
  video_url: string;
  image_url: string;
  text: string;
  title: string;
  sora_name: string;
  rewaya_name: string;
  reciter_name: string;
  share_description: string;
  share_title: string;
  share_url: string;
}

interface TadaborResponse {
  tadabor: {
    [key: string]: TadaborItem[];
  };
}
interface TadaborParams {
  language?: string;
    sura?: number;
}
interface VideoItem {
  id: number;
  video_type: number;
  video_url: string;
  video_thumb_url: string;
}

interface ReciterVideos {
  id: number;
  reciter_name: string;
  videos: VideoItem[];
}

interface VideosResponse {
  videos: ReciterVideos[];
}
interface VideosParams {
  language?: string;
}
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://mp3quran.net/api/v3' }),
    endpoints: (builder) => ({
         getSuwar:builder.query<SuwarResponse,SuwarParams>({
            query:({language})=>({
                url:'/suwar/',
                method:'GET',
                params:{...(language && {language})}
            })
    }),
         getRewayat:builder.query<RiwayatResponse,RiwayatParams>({
            query:({language})=>({
                url:'/riwayat/',
                method:'GET',
                params:{...(language && {language})}
            })
    }),
         getMoshaf:builder.query<MoshafResponse,MoshafParams>({
            query:({language})=>({
                url:'/moshaf/',
                method:'GET',
                params:{...(language && {language})}
            })
    }),     
         getReciters:builder.query<RecitersResponse,RecitersParams>({
            query:({language,reciter,rewaya,sura,last_update_date})=>({
                url:'/reciters/',
                method:'GET',
                params:{...(language && {language}),
                ...(reciter && {reciter}),
                ...(rewaya && {rewaya}),
                ...(sura && {sura}),
                ...(last_update_date && {last_update_date}),
            }
            })
    }),
         getLiveTv:builder.query<LiveTvResponse,LiveTvParams>({
            query:({language})=>({
                url:'/live-tv/',
                method:'GET',
                params:{...(language && {language})}
            })
    }),
         getRadios:builder.query<RadiosResponse,RadiosParams>({
            query:({language,last_update_date})=>({
                url:'/radios/',
                method:'GET',
                params:{...(language && {language}),
                ...(last_update_date && {last_update_date}),}
            })
    }), 
         getTafsir:builder.query<TafasirResponse,TafsirParams>({
            query:({tafsir,sura,language})=>({
                url:'/tafsir/',
                method:'GET',
                params:{tafsir,
                ...(sura && {sura}),
                ...(language && {language}),}
            })
    }), 
         getTadabor:builder.query<TadaborResponse,TadaborParams>({
            query:({language,sura})=>({
                url:'/tadabor/',
                method:'GET',
                params:{...(language && {language}),
                ...(sura && {sura}),}
            })
    }), 
         getVideos:builder.query<VideosResponse,VideosParams>({
            query:({language})=>({
                url:'/videos/',
                method:'GET',
                params:{...(language && {language}),}
            })
    }),               
})
})
export const { 
    useGetSuwarQuery,
    useGetRewayatQuery,
    useGetMoshafQuery,
    useGetRecitersQuery,
    useGetLiveTvQuery,
    useGetRadiosQuery,
    useGetTafsirQuery,
    useGetTadaborQuery,
    useGetVideosQuery,
 } = apiSlice