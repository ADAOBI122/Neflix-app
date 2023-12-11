
const unavaliable ="https://t3.ftcdn.net/jpg/00/10/37/18/360_F_10371839_XSeB2kreuA59Z1LexptFBM8qEuVlzphM.jpg"
const image_path ="https://image.tmdb.org/t/p/w500"

function MovieCard({movie}) {
  return (
    <div className=" relative  md:relative">
        <img  className=" w-[200px] mt-8 md:w-[200px] " src={movie.poster_path ? `${image_path}/${movie.poster_path}`:unavaliable}  alt=''/>
        <h1 className="font-bold  ">{movie.title ? movie.title : movie.name }</h1>
        <span className=" bg-black text-white rounded-full  border-green-500 border-2  md:bg-black md:text-white md:rounded-full md:p-1 md:border-green-500 md:border-2 md:absolute md:bottom-[20px] md:right-[35px]">{movie.vote_average.toFixed(1)}</span>
    </div>
  )
}

export default MovieCard