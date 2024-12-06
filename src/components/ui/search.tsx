import SearchLogo from '../../assets/search.svg'
export default function Search(){
    return <div className="flex items-center max-w-full  mx-auto">   
    <label className="sr-only">Search</label>
    <div className="relative w-full">
        <input type="text" id="voice-search" className="bg-search-bar border rounded-full text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Michael Jackson" required />
        <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
        <img src={SearchLogo} className='w-5 h-5'/>
        </button>
    </div>
    </div>
}