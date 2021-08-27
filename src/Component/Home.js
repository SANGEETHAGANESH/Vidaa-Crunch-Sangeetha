import React,{useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Home.css"
import moment from 'moment';

function Home(){
    const [date, setDate]=useState(new Date());
    const [MobileMenuOpen,setMobileMenuOpen]=useState(false);
    const [chatOpen , setChatOpen] = useState(true);
    const [calendarOpen, setCalendarOpen] = useState(true)
    const onChange=(e)=>{
        setDate(e)
    }
    return(
        <div className="whole-page ">
            <div style={{'height':'16px'}}></div>
            <div className="mx-lg-5 mx-1 mx-md-5"><h5 id="virtual-meeting">Virtual Meeting</h5></div>
            <div className="mx-lg-5 mx-1 mx-md-5 main-div">
            <img className={(chatOpen ? "main-image" : "box-close-main-image")} src={require('../Images/MainImage.png').default}/>
            <div className={"calendar-div"+(calendarOpen ? "" : " box-close")+(chatOpen ? "" : " box-right")}>
                <div className="cal-2-div">
                <div className="username-div">
                    <div className="close-user" style={{'background':'linear-gradient(90.75deg, #E22128 19.86%, #961317 103.95%)'}}
                      onClick={()=>{
                          setCalendarOpen(!calendarOpen)
                      }}>x</div>
                    <img className="profile-1" src={require('../Images/profile-1.png').default}/>
                    <div className="user-online">
                        <span className="mb-0">User Name</span><br/>
                        <span style={{'fontSize':'0.5em'}}>ONLINE</span>
                    </div>
                    <div className="user-vector-div">
                    <div className="vector-class-username"><img className="vector-image-username" src={require('../Images/video.png').default}/></div>
                    <div className="vector-class-username"><img className="vector-image-username" src={require('../Images/calendar.png').default}/></div>
                    </div>
                </div>
                <div className="schedule-outer-div">
                 <div className="current-date">   
                <b>{moment(date).format('MMMM Do YYYY')}</b>
                </div>
                <div className="schedule-div">
                Schedule a meeting
               <Calendar onChange={onChange} className="calendar"
                value={date} tileClassName="tileDesign"/>
                </div>
                </div>
                </div>
            </div>
            <div className={"chat-box" + (chatOpen ? "" : " box-close")}>
                <div className="topic-chat">CHAT BOX
                    <div className="close" style={{'background':'linear-gradient(90.75deg, #E22128 19.86%, #961317 103.95%)'}}
                    onClick={()=>{setChatOpen(!chatOpen)}}>x</div>
                </div>
                <div className="display-area">
                    <div className="row mx-1 mt-3">
                    <p id="contant" class="text-muted">John Deo<span className="time">10.10</span></p>
                        <img className="col-3 profiles" src={require("../Images/profile-1.png").default}/>
                        <div className="col-9 chats">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum rhoncus elit, ut tempor dui porta quis</div>
                    </div>
                    <div className="row mx-1 mt-3">
                    <p id="contant" class="text-muted">John Snow<span className="time">10.10</span></p>
                        <img className="col-3 profiles" src={require("../Images/profile-2.png").default}/>
                        <div className="col-9 chats">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                    <div className="row mx-1 mt-3">
                    <p id="contant" class="text-muted">Alex<span className="time">10.10</span></p>
                        <img className="col-3 profiles" src={require("../Images/profile-3.png").default}/>
                        <div className="col-9 chats">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum rhoncus elit, ut tempor dui porta quis</div>
                    </div>
                    <div className="row mx-1 mt-3">
                    <p id="contant" class="text-muted">James franco <span className="time">10.10</span></p>
                        <div className="col-9 chats">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum rhoncus elit, ut tempor dui porta quis. Phasellus pulvinar non nibh tempus finibus. Vestibulum quis ex diam.</div>
                        <img className="col-4 profiles" src={require("../Images/profile-4.png").default}/>
                    </div>
                    <div className="row mx-1 mt-3">
                    <p id="contant" class="text-muted">Nicolas Cage<span className="time">10.10</span></p>
                        <img className="col-3 profiles" src={require("../Images/profile-3.png").default}/>
                        <div className="col-9 chats">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum rhoncus elit, ut tempor dui porta quis</div>
                    </div>
                </div>
                <div className="type-area my-4 mx-4"><i class="bi bi-emoji-smile mx-2 emoji"></i><input className="input-area" placeholder="Type A Message ...." type="textbox"/><span className="send-arrow"><img src={require('../Images/send.png').default}/></span></div>
            </div>
            <div className="vector-div">
            <div className="left-vector-class">
                <div className="vector-class my-4"><img className="vector-image" src={require('../Images/Vector.png').default}/></div>
                <div className="vector-class"><img className="vector-image" src={require('../Images/lap_forward.png').default}/></div>
                <div className={"vector-class" + (calendarOpen ? " selected" : "")}
                onClick={()=>{
                    setCalendarOpen(!calendarOpen)
                }}><i class={"bi bi-calendar message-icon" + (calendarOpen ? " selected" : "")}></i></div>
            </div>
            <div className="center-vector-class">
                <div className="vector-class my-4"><img className="vector-image" src={require('../Images/video.png').default}/></div>
                <div className="vector-class my-4"><img className="vector-image" src={require('../Images/mic.png').default}/></div>
                <div className="vector-class"><img className="vector-image" src={require('../Images/lap_forward.png').default}/></div>
                <div className="vector-class" style={{'background':'linear-gradient(90.75deg, #E22128 19.86%, #961317 103.95%)'}}><img style={{'height':'23px'}} className="vector-image" src={require('../Images/end.png').default}/></div>

                <div className="vector-class-three-dots"
                   onClick={()=>{
                       setMobileMenuOpen(!MobileMenuOpen);
                   }}
                ><i class="bi bi-three-dots message-icon"></i></div>
                <div className={"whole-vector-class-three-dots" + (MobileMenuOpen ? " dots-open" : "")}>
                 <div>
                   <div className="vector-class my-4"><img className="vector-image" src={require('../Images/network.png').default}/></div>
                   <div className="vector-class"><img className="vector-image" src={require('../Images/contact.png').default}/></div>
                   <div className={"vector-class" + (chatOpen ? " selected" : "")}
                    onClick={()=>{
                      setChatOpen(!chatOpen);
                      setMobileMenuOpen(false);
                   }}><i class={"bi bi-chat-left-dots-fill message-icon" + (chatOpen ? " selected" : "")}></i></div>
                 </div>
                 <div>
                   <div className="vector-class my-4"><img className="vector-image" src={require('../Images/Vector.png').default}/></div>
                   <div className="vector-class"><img className="vector-image" src={require('../Images/lap_forward.png').default}/></div>
                   <div className={"vector-class" + (calendarOpen ? " selected" : "")}
                     onClick={()=>{
                      setCalendarOpen(!calendarOpen)
                      setMobileMenuOpen(false)
                    }}><i class={"bi bi-calendar message-icon" + (calendarOpen ? " selected" : "")}></i></div>
                 </div>
                </div>
            </div>
            <div className="right-vector-class">
                <div className="vector-class my-4"><img className="vector-image" src={require('../Images/network.png').default}/></div>
                <div className="vector-class"><img className="vector-image" src={require('../Images/contact.png').default}/></div>
                <div className={"vector-class" + (chatOpen ? " selected" : "")}
                onClick={()=>{
                    setChatOpen(!chatOpen)
                }}><i class={"bi bi-chat-left-dots-fill message-icon" + (chatOpen ? " selected" : "")}></i></div>
            </div>
            </div>
            </div>

        </div>
    )
}

export default Home;