import Search from "./ui/search"
import { SidebarTrigger } from "./ui/sidebar"
import MichaelLogo from '../assets/image.png'
import Background from '../assets/background.png'
import VerifiedLogo from '../assets/verified.svg'
import MusicList from "./List"

export type Song = {
    id: number;
    title: string;
    file: string;
    album: string;
    time: string;
    playing: string;
    cover: string;
  };

  export type MusicListProps = {
    currentSong: Song | null;
    setCurrentSong: React.Dispatch<React.SetStateAction<Song | null>>;
  };
export default function Music({setCurrentSong, currentSong}:MusicListProps){

    return <div className="w-full h-full bg-gradient-to-br from-red-600 to-stone-900">

    <div className="flex justify-between items-center p-2">
        <SidebarTrigger className="mr-2"/>
        <div className="flex w-1/2 justify-between">
          <span className="text-menu-white text-sm md:text-lg">Music</span>
          <span className="text-menu-white text-sm md:text-lg">Podcast</span>
          <span className="text-menu-white text-sm md:text-lg">Live</span>
          <span className="text-menu-white text-sm md:text-lg">Radio</span>
        </div>
        <Search />
      </div>

      {/* Banner  */}
    <div className="relative mt-28 justify-center items-center flex flex-grow">
        <div className={` absolute top-20 left-12 flex flex-col items-start ${currentSong ? "md:left-44" : "md:left-60" }`}>
                <div className="flex">
                    <img src={VerifiedLogo} className="w-5 h-5"/>
                    <span className="text-side-miniHeading ml-1 mb-2 text-sm">Verified Artist</span>
                </div>
            
            <h1 className="text-side-white text-3xl mb-2">Michael Jackson</h1>
            <span className="text-side-miniHeading text-sm">27.852.501 monthly listeners</span>
        </div>
    <img src={Background} className="h-56 w-full p-2 md:w-2/3"/>
     <img src={ MichaelLogo} className="absolute -top-16 left-36 md:left-96 h-56 "/>
        
    </div>

    <MusicList setCurrentSong={setCurrentSong} currentSong={currentSong}/>
    </div>
}