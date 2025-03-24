import React from 'react'
import './App.css'
import My_chat from './My_chat.jsx' ;
import Other_chat from './Other_chat.jsx';
function App() {
    let [text,settext] = React.useState([])
 return(
  <main>
             <div className='main_childs'>
                   <div>
                      <div id="binod" className='profile'></div>
                      <div className='name'>BINOD</div>
                   </div>
                   <div className='main_childs_2ndchild'>
                       <My_chat text={text} settext={settext} />
                   </div>
             </div>
         
             <div className='main_childs'>
                   <div>
                    <div id="dolly" className='profile'></div>
                    <div className='name'>DOLLY</div>
                    </div>
                   <div className='main_childs_2ndchild'>
                       <Other_chat text={text} settext={settext}  />
                   </div>
             </div>
             <div id="swap"> {"<    >"} </div>
  </main>
 )
}

export default App
