import Nav from "./Nav"

 

function Header() {
  return (
    <>

 <div className="w-[100%] h-[20vh]" >
      
     <Nav/>

   

    <div className="block text-center relative top-[5px] md:flex justify-around">
    <h1 className="mt-[-8px] md:ml-[130px] font-bold text-2xl relative top-[8px]">nFlix App</h1>

        <nav className="mt-[10px]  md:relative  left-[55px] top-[20px]">
          <input className="border-solid border-[1px] border-black " placeholder="Enter Movie Name"></input>
          <button className="bg-red-600"> search</button>
        </nav>
     
    </div>
    




 </div>
   </>
  )
}

export default Header