import { IoSend } from "react-icons/io5";
import { FcVideoCall } from "react-icons/fc";
import { IoCall } from "react-icons/io5";
import React from 'react'
function My_chat(props)
{
    // props.text  , props.settext ,props.ref ,props.scroll
    let [my_input,setmy] = React.useState("")
    function option()
    {
        alert("not working ")
    }
    return(
        <>
            <div className="msg_content" ref={props.ref}>
            <p>Welcome to our community !</p>
                {
                    
                    props.text.map((el,index)=>{
                           
                            if(el[0] === '1')
                            {
                                return(
                                    <div key={index} className="only_my">
                                        <div>{el.slice(1,el.lenght)}</div>
                                    </div>
                                )
                            }
                            else{
                                return(
                                    <div key={index} className="only_my2">
                                        <div>{el.slice(1,el.lenght)}</div>
                                    </div>
                                )
                            }
                    })
                }  
            </div>

            <div className="chat2nd">
                 <div>
                     <input type="text" placeholder="send your msg" value={my_input} onChange={(e)=> setmy(e.target.value)} />
                 </div>
                 <div>
                    <IoSend className="send" onClick={()=> { 
                           if(my_input.length != 0)
                               {
                                props.settext([...props.text,"1"+my_input]) ;
                                setmy('')
                                props.scroll()
                               }
                          } }  />
                </div>
            </div>

            <div id="call1">
                  <FcVideoCall className="vdo" onClick={option} />
                  <IoCall className="cl" onClick={option} />
            </div>
        </>
    )
}

export default My_chat ;