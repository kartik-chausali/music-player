/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react'
import './App.css'
import Music, { Song } from './components/Music'
import Playing from './components/Playing'
import SideBar from './components/Side'

function App() {
 const [currentSong, setCurrentSong] = useState<Song | null>(null);

  return (
    <div className='w-screen h-screen flex '>
      <Music setCurrentSong={setCurrentSong} currentSong={currentSong}/>
      {currentSong && <Playing name={currentSong.title} time={currentSong.time} file={currentSong.file} cover={currentSong.cover}/>}
    </div>
  )
}

export default App
