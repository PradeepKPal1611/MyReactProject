import logo from './logo.svg';
import './App.css';
import React from 'react'
import  Profile from './Profile'
// function App() {
//   const [data, setData] = useState(null)
//   const [print, setPrint] = useState(false)

//   function GetData(val)
//   {
//     console.log(val.target.Value)
//     setData(val.target.value)
//     setPrint(false)
//   }
//   return (
//     <div className="App">
       
//       {
//        print?
//         <h2>{data}</h2>
//         :null
//       }

//       <input type="text" placeholder="Enter Your Value Here!" onChange={GetData}/><br/>
//       <button onClick={()=>setPrint(true)}>Get Your Data</button>
    
//     </div>
//   );
// }

// Show And Hide Function 

// function App() {
//   const[status,setStatus] = React.useState(true)
//   return (
//   <div className='App'>
//   {
//     status? <h1>Hello Guys Welcome!</h1>:null
//   }
//   {/*<button onClick={()=>setStatus(false)}>Hide </button>
//   <button onClick={()=>setStatus(true)}>Show </button>*/}
//   <button onClick={()=>setStatus(!status)}>Toogle</button>
// </div>
// );

//}

function App(){
  return(
    <div className='App'>
    <Profile />
    </div>
  )
}
export default App;


