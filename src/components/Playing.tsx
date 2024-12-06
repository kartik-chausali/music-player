import Prev from '../assets/prev.svg'
import Play from '../assets/play.svg'
import Next from '../assets/next.svg'
import Random from '../assets/random.svg'
import Repeat from '../assets/repeat.svg'
import { Slider } from "@/components/ui/slider"
import ReactHowler from 'react-howler'
import { useState, useRef, useEffect } from 'react'
import {PiPause} from 'react-icons/pi'


export default function Playing({name , file, cover, time}:{name:string, file:string, cover:string, time:string}){

  const [isPlaying, setIsPlaying] = useState(true); // Controls play/pause
  const [progress, setProgress] = useState(0); // Current progress of the song
  const [duration, setDuration] = useState(0); // Total duration of the song
  const howlerRef = useRef<ReactHowler | null>(null); // Ref to access ReactHowler methods
  
   // Update progress periodically
   useEffect(() => {
    const interval = setInterval(() => {
      if (howlerRef.current) {
        const currentProgress = howlerRef.current.seek(); // Get current time
        setProgress(currentProgress);
      }
    }, 500); // Update every 500ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  
  // Play/Pause toggle handler
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

   // Handle slider change
   const handleSliderChange = (value: number[]) => {
    const newProgress = value[0];
    setProgress(newProgress);
    if (howlerRef.current) {
      howlerRef.current.seek(newProgress); // Set new progress in audio
    }
  };
    // Get song duration once audio is loaded
    const handleLoad = () => {
      if (howlerRef.current) {
        const totalDuration = howlerRef.current.duration();
        setDuration(totalDuration);
      }
    };

    
    return <div className="bg-black p-4 flex justify-center items-center h-screen">
      <div className="bg-playing-red p-4 shadow-md w-80 rounded-xl">
        {/* <!-- Album Cover --> */}
        <span className='flex items-center justify-center text-side-white mb-4'>Now Playing</span>
        <img src={cover} alt="idk - Highvyn, Taylor Shin" className="w-64 h-64 mx-auto rounded-lg mb-4 "/>
        {/* <!-- Song Title --> */}
        <h2 className="text-xl font-semibold text-center text-side-white">{name}</h2>
        {/* <!-- Artist Name --> */}
        <p className="text-xs text-center text-side-miniHeading">Michael Jackson</p>

        <div className='flex justify-center items-center text-xs text-side-white mt-6'>
        <span className='mr-2'>{formatTime(progress)}</span>
        <Slider value={[progress]} max={duration || 100} step={0.1} onValueChange={handleSliderChange} className='' />
        <span className='ml-2'>{formatTime(duration)}</span>
        </div>
        {/* <!-- Music Controls --> */}
        <div className="mt-5 flex justify-between items-center">
        <button className="p-3 rounded-full">
          <img src={Repeat} alt="Shuffle" />
        </button>

         <div className="flex items-center space-x-2">
          <button className="p-3 rounded-full focus:outline-none">
          
                      <img src={Prev} className=''/>
          </button> 

          <button onClick={togglePlayPause} className="p-4 rounded-full bg-play-background  focus:outline-none mx-4">
            <img src={Play} className={isPlaying ? "hidden" : "block"}/>
            <PiPause className={isPlaying ? "block h-6 w-6" :"hidden"} fill='white'/>
          </button>
          <button className="p-3 rounded-full  focus:outline-none">
            <img src={Next}/>
          </button>
          </div>


          <button className="p-3 rounded-full">
          <img src={Random} alt="Shuffle" />
        </button>
        </div>
       
        
        <ReactHowler src={file} playing={isPlaying} ref={howlerRef} onLoad={handleLoad}/>
       
      </div>
    </div>
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};