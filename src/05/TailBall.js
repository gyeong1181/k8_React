export default function tailBall({n}) {
  const ballColor = {
    'b0' : 'bg-red-800',
    'b1' : 'bg-yellow-200',
    'b3' : 'bg-lime-800',
    'b4' : 'bg-blue-200',
    'b5' : 'bg-purple-800'
  }
  return (
    <div className={`w-12 h-20 m-2
                    flex justify-center items-center
                    rounded-full
                    ${ballColor['b' + Math.floor(n/20)]}
                    bg-red-700
                    text-white text-2xl
                    font-bold
                    `}>
      {n}
    </div>
  )
}
