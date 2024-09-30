import Mydiv2 from "./Mydiv2";

export default function Mydiv1() {
  const d1 = 'div1';
  const d2 = 'div2';
  const d3 = 'div3';

  return (
    <div className="w-4/6 h-4/6
                    flex flex-col justify-center items-center
                    bg-lime-400
                      text-white font-bold">       
      <div className="w-full flex justify-start items-center
                      p-2">  
              {/* Mydiv1 글자 왼쪽으로 이동 */}
      
       {d1}
    </div>
    <Mydiv2 dn1={d1} dn2={d2} dn3={d3}/>
  </div>
  )
}
