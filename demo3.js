//functional example and adding Events
function clickbutton(){
  alert("Clicked!!!!!!");
}

const myelement = (
  <button onClick={clickbutton}>Click this button</button>
)
  
  ReactDOM.render(myelement, document.getElementById('root'));