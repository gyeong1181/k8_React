function myClockTime() {
  let today = new Date();
  today = today.toLocaleString() ;

return(
  <>  
  <p style={{Backgroundcolor:'gray', color:'white'}}>
      {/* {new Date().toLocalString} */}
      {today}
     </p>
  </>
  );
}
// 날짜 불러오는 건데 일단 Hello.js 보고 복붙함 

export default myClockTime;
