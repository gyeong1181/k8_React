import { TbBackground } from "react-icons/tb";

function Hello() {
  let today = new Date();
  today = today.toLocaleString() ;

  let name = '';
  return (
    // jsx 는 반드시 하나의 태그만 return
    // fragment tag <> </>
    <>
    <p className="p1">
      Hello React!!
     </p>
     <p className='text-4xl text-yellow-400'>
      {name === 'PNU' ? '부산대학교 김경훈' : '김경훈'}
     </p>
     <p style={{Backgroundcolor:'gray', color:'white'}}>
      {/* {new Date().toLocalString} */}
      {today}
     </p>
    </>
  );
}

export default Hello;