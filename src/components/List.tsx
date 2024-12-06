import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "./ui/table"
  
  import BillieJeans from '../assets/songs/Michael_Jackson_-_Billie_Jean.mp3'
  import Beatit from '../assets/songs/Michael_Jackson_-_Beat_It.mp3'
  import SmoothCriminal from '../assets/songs/Michael_Jackson_-_Smooth_Criminal.mp3'
  import Rock from '../assets/songs/Michael_Jackson_-_Rock_With_You.mp3'
  import Stop from '../assets/songs/Michael_Jackson_-_Don_t_Stop_Till_You_Get_Enough.mp3'
  import ThrillerCover from '../assets/Thriller.png'
  import ThrillerCover2 from '../assets/Thriller2.png'
  import MusicLogo from '../assets/music.svg'
  import Blood from '../assets/Blood.png'

import { useEffect, useState } from "react"
import { MusicListProps, Song } from "./Music"

export default function MusicList({setCurrentSong}:MusicListProps){
    
    const initialSongs = [{
        title:"Billie Jeans",
        id: 1,
        file:BillieJeans,
        album: "Thriller 25 Superstar",
        time:"4.53",
        playing:"1.040.811.084",
        cover: ThrillerCover
    },
    {
        title:"Beat It",
        id:2,
        file:Beatit,
        album:"Thriller 25 Superstart",
        time:"4.18",
        playing:"643.786.045",
        cover:ThrillerCover
    },
    {
        title:"Smooth Criminal - 2012 Remastered Edition",
        id:3,
        file:SmoothCriminal,
        album:"Thriller 25 Superstar",
        time:"4.17",
        playing:"407.234.004",
        cover:ThrillerCover2
    },
    {
      title:"Don't Stop Till You Get It",
      id:4,
      file:Stop,
      album:"Off the Wall",
      time:"6.05",
      playing:"316.391.952",
      cover:Blood
    },
    {
      title:"Rock With You",
      id:5,
      file:Rock,
      album:"Off the Wall",
      time:"3.40",
      playing:"316.391.952",
      cover:Blood
    }
]

const [songs, setSongs] = useState<Song[]>(initialSongs);
const [draggedSongId, setDraggedSongId] = useState<number | null>(null);
const [clickedRowId, setClickedRowId] = useState<number | null>(null);

const handleDragStart = (id: number) => {
  setDraggedSongId(id);
};

const handleDragOver = (event: React.DragEvent<HTMLTableRowElement>) => {
  event.preventDefault();
};

const handleDrop = (id: number) => {
  if (draggedSongId === null) return;

  const draggedIndex = songs.findIndex((song) => song.id === draggedSongId);
  const targetIndex = songs.findIndex((song) => song.id === id);

  if (draggedIndex !== targetIndex) {
    const updatedSongs = [...songs];
    const [draggedSong] = updatedSongs.splice(draggedIndex, 1);
    updatedSongs.splice(targetIndex, 0, draggedSong);
    setSongs(updatedSongs);
  }

  setDraggedSongId(null);
};

function handleClick(song:Song){
    setClickedRowId(song.id);
    setCurrentSong(song);
}

useEffect(()=>{

})
    return <Table>
    <TableCaption>A list of your recent Songs.</TableCaption>
    <TableHeader>
      <TableRow className="">
        <TableHead className="">#</TableHead>
        <TableHead></TableHead>
        <TableHead>TITLE</TableHead>
        <TableHead>PLAYING</TableHead>
        <TableHead>TIME</TableHead>
        <TableHead className="text-right">ALBUM</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        {songs.map((song)=>{
            return <TableRow draggable
            onDragStart={() => handleDragStart(song.id)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(song.id)}
            onClick={() => handleClick(song)} className={`relative overflow-hidden transition-all  border-hidden text-red px-3  duration-500 border border-transparent   group  ${clickedRowId == song.id ? "bg-hov-red text-side-white pointer-events-none" : "hover:shadow-side-red hover:bg-side-red hover:text-white"}`}>

            <TableCell className=" text-xs md:text-md md:font-medium relative z-10 flex items-center space-x-3">
            <div className="w-3 h-fit bg-red-500 mr-3 group-hover:w-1 transition-all duration-300"></div>
              {clickedRowId == song.id ? (<img src={MusicLogo} className="h-5 w-5 "/>) : ( song.id)}
              </TableCell>
            <TableCell ><img src={song.cover} className="h-12 w-12 md:h-7 md:w-7"/></TableCell>
            <TableCell className="text-xs font-normal md:font-medium md:text-md">
                <span className="block sm:hidden"> {song.title.substring(0, 10)} {song.title.length>15 && <span>...</span>}</span>
                <span className="hidden sm:block">{song.title.substring(0, 27)} {song.title.length>26 && <span>...</span>}</span></TableCell>
           <TableCell className="text-xs font-normal md:font-medium md:text-md">{song.playing}</TableCell>
           <TableCell className="text-xs font-normal md:font-medium md:text-md">{song.time}</TableCell>
           <TableCell className="text-right text-xs font-normal md:font-medium md:text-md">
            <span className="block sm:hidden whitespace-nowrap">{song.album.substring(0, 10)} {song.album.length>=10 && <span>...</span>}</span>
            <span className="hidden sm:block">{song.album.substring(0, 15)} {song.album.length>=15 && <span>...</span>}</span></TableCell>
            </TableRow>
        })}
</TableBody>
  </Table>
  
}

