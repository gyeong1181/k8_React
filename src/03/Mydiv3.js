
export default function Mydiv3({dn1, dn2, dn3}) {
  console.log({dn1, dn2, dn3})
  return (
    <div className="w-4/6 h-4/6
                    flex flex-col justify-center items-center
                    bg-lime-900
                      text-white font-bold">
    <div className="w-full h-10 p-5 m-2
                     flex justify-start items-center">
     {/* {`${probs.dnn1} > ${probs.dnn2} > ${probs.dnn3}`}   */}
     {`${dn1} > ${dn2} > ${dn3}`} 
    </div>
  </div>
  )
}
