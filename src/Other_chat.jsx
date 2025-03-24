import { IoSend } from "react-icons/io5";
import { FcVideoCall } from "react-icons/fc";
import { IoCall } from "react-icons/io5";
import React from 'react'
function Other_chat(props)
{
     // props.text  , props.settext
     let [other_input,setother] = React.useState("")

     function option()
     {
         alert("not working ")
     }
    return(
        <>
            <div className="msg_content">
            <p>Welcome to our community ! </p>
                {
                    props.text.map((el,index)=>{
                           if(el[0] === '2')
                           {
                                return(
                                <div key={index} className="only_other">
                                    <div>{el.slice(1,el.lenght)}</div>
                                </div>
                                  )
                           }
                           else{
                            return(
                                <div key={index} className="only_other2">
                                    <div>{el.slice(1,el.lenght)}</div>
                                </div>
                            )
                        }
                    })
                }  
            </div>
            <div className="chat2nd">
                <div>
                    <input type="text" placeholder="send your msg"  value={other_input} onChange={(e)=> setother(e.target.value)} />
                </div>
                <div >
                    <IoSend className="send" onClick={()=> { 
                        if(other_input.length != 0)
                               {
                                props.settext([...props.text,"2"+other_input]) ;
                                setother('');
                               }
                         } } />
                </div>
            </div>
           <div id="call2">
                    <FcVideoCall  className="vdo" onClick={option}  />
                    <IoCall className="cl" onClick={option} />
           </div>
        </>
    )
}

export default Other_chat ;