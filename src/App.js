import logo from './logo.svg';
import './App.css';
import { AiFillHome } from "react-icons/ai";
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import FoodMain from './06/FoodMain';
import FoodMain from './07/boxOffice';


// import Mydiv1 from './03/Mydiv1';
// import Hello from './01/Hello';
// import myClock from './02/myClock';


function App() {
  return (
    <div className="w-full xl:w-10/12 h-screen mx-auto 
                    flex flex-col justify-center items-center">
 
    <header className='w-full h-20
                      flex justify-between items-center
                      bg-slate-200'>
    <p className='txt 2xl font-bold p-5 '> K-digital-8기 </p>
 
    <p className='txt 4xl font-bold p-5'>  <AiFillHome /> </p>

    </header>
    

    
    <main className='w-full grow 
                    flex flex-col justify-center items-center
                    overflow-y-auto'>
    {/* <MyList/> */}
    {/* <Lotto/> */}
    <FoodMain/>
    </main>
    
    <footer className='w-full h-20
                      flex justify-center items-center
                      bg-black text-white'>

    <p className='txt 2xl font-bold p-5 '> K-digital-김경훈 </p>
    </footer>

    
    </div>
  );
}

export default App;
