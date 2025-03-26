import React from 'react'
import './App.css'
import My_chat from './My_chat.jsx' ;
import Other_chat from './Other_chat.jsx';
function App() {
    let [text,settext] = React.useState([])
    let el1 = React.useRef()
    let el2 = React.useRef()
    function scroll()
    {
        
        el1.current.scrollBy(0,el1.current.scrollHeight) ;
        el2.current.scrollBy(0,el2.current.scrollHeight) ;
    }
 return(
  <main>
             <div className='main_childs'>
                   <div>
                      <div id="binod" className='profile'></div>
                      <div className='name'>BINOD</div>
                   </div>
                   <div className='main_childs_2ndchild'>
                       <My_chat text={text} settext={settext} ref={el1} scroll={scroll} />
                   </div>
             </div>
         
             <div className='main_childs'>
                   <div>
                    <div id="dolly" className='profile'></div>
                    <div className='name'>DOLLY</div>
                    </div>
                   <div className='main_childs_2ndchild'>
                       <Other_chat text={text} settext={settext} ref={el2} scroll={scroll}  />
                   </div>
             </div>
             <div id="swap"> {"<    >"} </div>
  </main>
 )
}

export default App
