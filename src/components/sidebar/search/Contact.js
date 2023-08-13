import { useDispatch, useSelector } from "react-redux";

function Contact() {
  
    return (
        <li
 
            className="list-none h-[72px] hover:dark:bg-dark_bg_2 cursor-pointer dark:text-dark_text_1 px-[10px]"
        >
            {/*Container*/}
            <div className="flex items-center gap-x-3 py-[10px]">
                {/*Contact infos*/}
                <div className="flex items-center gap-x-3">
                    {/*Conversation user picture*/}
                    <div className="relative min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden">
                     
                    </div>
                    {/*Conversation name and message*/}
                    <div className="w-full flex flex-col">
                        {/*Conversation name*/}
                       
                        {/* Conversation status */}
                        <div>
                            <div className="flex items-center gap-x-1 dark:text-dark_text_2">
                                <div className="flex-1 items-center gap-x-1 dark:text-dark_text_2">
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Border*/}
            <div className="ml-16 border-b dark:border-b-dark_border_1"></div>
        </li>
    );
}



export default Contact;