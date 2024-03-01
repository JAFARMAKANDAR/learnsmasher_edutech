import React from 'react';
import {motion} from "framer-motion"
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { NavLink } from 'react-router-dom';
import { TbAbc } from "react-icons/tb";
import { GiRoad } from "react-icons/gi";
import { FaCheckDouble } from "react-icons/fa";
import { CiMemoPad } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";
import { PiTextTFill } from "react-icons/pi";
import { AiFillGoogleCircle } from "react-icons/ai";
import { RiChatNewLine } from "react-icons/ri"
import { FaLink } from "react-icons/fa6";

const routes=[{
    path:"/Tutorials",
    name:"Tutorials",
    icon:<  TbArrowsDoubleSwNe/>
    
},
{
    path:"/Interview",
    name:"Interview Questions",
    icon:< ImProfile/>
    
},
{
    path:"/Mnc",
    name:"MNCsMCQs",
    icon:<   TbAbc />
    
},{
    path:"/Roadmap",
    name:"Roadmap",
    icon:<  GiRoad/>
    
},{
    path:"/Cheat",
    name:"Cheat-sheet",
    icon:<  FaCheckDouble/>
    
},{
    path:"/Resumes",
    name:"Resumes",
    icon:<  CiMemoPad/>
    
},

];

const routes2=[{
    path:"/Crtificate",
    name:"Internship Certificate",
    icon:<CgNotes/>
},
    {
        path:"/Exam",
        name:"LSEExam/Test",
        icon:< TbAbc/>},
        {
            path:"/Test",
            name:"Test Crtificate",
            icon:<CgNotes/>},
];
const routes3=[ 
    {
        path:"/Google",
        name:"On Google",
        icon:< FaGoogle/>},
        {
        path:"/Trust",
        name:"On TrustPilot",
        icon:< PiTextTFill />},
        {
            path:"/Door",
            name:"On GlassDoor",
            icon:< AiFillGoogleCircle />},      
]

const routes4=[{
    path:"/Support",
    name:"Chat/CallSupport",
    icon:< RiChatNewLine />
},
{
    path:"/Social",
    name:"SocialMediaLinks",
    icon:<  FaLink />
}
]
function Sidebar({children}) {
  return (
   <>
   


    <div className='maincontainer'> 
    
  
       
        <motion.div animate={{width:"200px",height:"750px"}} className='sidebar'>

        <div className='top'>
    <img src='Images/learn5.png'/>
    </div>
   
        <div className="search">
        <div className="search_icon">
         < BiSearch/>
        </div>
        <input placeholder='Search'/>
    </div>
    <div>
    <h6 className='heading'>LSEADDONS</h6>
    </div>
    
            <section className='routes'>
                {routes.map((route)=>(
                    <NavLink to={route.path} key={route.name} className='link'>
                        <div className="icon">{route.icon}</div>
                        <div className="link_text">{route.name}</div>

                    </NavLink>
                ))}

               <div>
                  <h6 className='heading2'>LSEOUTCOMES</h6>
                 </div>


                </section>

                  <div>
                
                    <section className='routes2'>
                        {routes2.map((route2)=>(
                            <NavLink to={route2.path} key={route2.name} className='link'>
                                <div className="icon">{route2.icon}</div>
                                <div className="link_text">{route2.name}</div>

                            </NavLink>
                               ))}
                     </section>
                    <div>

                    <div>
                  <h6 className='heading2'>REVIEWS US</h6>
                 </div>
                     <section className='routes3'>
                {routes3.map((route3)=>(
                    <NavLink to={route3.path} key={route3.name} className='link'>
                        <div className="icon">{route3.icon}</div>
                        <div className="link_text">{route3.name}</div>

                    </NavLink>
                ))}

                </section>

                <div>
                  <h6 className='heading2'>LSE LINKS</h6>
                 </div>
                     <section className='routes3'>
                {routes4.map((route4)=>(
                    <NavLink to={route4.path} key={route4.name} className='link'>
                        <div className="icon">{route4.icon}</div>
                        <div className="link_text">{route4.name}</div>

                    </NavLink>
                ))}

                </section>
               


                </div>

               


            </div>   
            
       
        </motion.div>
        
        <main>
            {children}
        </main>
   
 
       
    </div>
    </>
  );
}
export default Sidebar;