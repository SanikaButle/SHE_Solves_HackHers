// import { Link } from "react-router-dom";
// import NavBar from "../components/NavBar";
// import { FaUsers, FaRobot, FaComments, FaCalendarAlt } from "react-icons/fa";

// const Dashboard = () => {
//     return (
//         <div className="relative bg-white p-6">
//             <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
//                 <source src="https://media.istockphoto.com/id/1003565204/video/man-leading-meeting-motivating-hackers-coding-for-charity.mp4?s=mp4-640x640-is&k=20&c=aWNBY2zDZbeJTL5hF-8aPCG_C8hmWiNiSFPcHe3Q5cQ=" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             <div className="relative z-10">
//                 <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//                 <div className="grid grid-cols-2 gap-4">
//                     <Link to="/find-teammates" className="bg-green-400 p-6 rounded-lg shadow-lg text-center">
//                         <div className="text-black font-bold text-lg flex items-center justify-center space-x-2">
//                             <FaUsers size={30} color="#000" />
//                             <span>Find Teammates</span>
//                         </div>
//                         <p className="text-bold" style={{ color: "white" }}>Swipe to match with developers</p>
//                     </Link>

//                     <Link to="/ai-team-analyzer" className="bg-yellow-400 p-6 rounded-lg shadow-lg text-center">
//                         <div className="text-black font-bold text-lg flex items-center justify-center space-x-2">
//                             <FaRobot size={30} color="#000" />
//                             <span>AI Team Analyzer</span>
//                         </div>
//                         <p className="text-bold" style={{ color: "white" }}>Check team compatibility</p>
//                     </Link>

//                     <Link to="/chat" className="bg-blue-400 p-6 rounded-lg shadow-lg text-center">
//                         <div className="text-black font-bold text-lg flex items-center justify-center space-x-2">
//                             <FaComments size={30} color="#000" />
//                             <span>Chat</span>
//                         </div>
//                         <p className="text-bold" style={{ color: "white" }}>Message your connections</p>
//                     </Link>

//                     <Link to="/hackathon-explorer" className="bg-red-400 p-6 rounded-lg shadow-lg text-center">
//                         <div className="text-black font-bold text-lg flex items-center justify-center space-x-2">
//                             <FaCalendarAlt size={30} color="#000" />
//                             <span>Hackathon Explorer</span>
//                         </div>
//                         <p className="text-bold" style={{ color: "white" }}>Find upcoming events</p>
//                     </Link>
//                 </div>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <NavBar />
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { FaUsers, FaRobot, FaComments, FaCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="relative bg-white p-6 min-h-screen pb-16">
            {/* Background Video */}
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
                <source src="https://media.istockphoto.com/id/1003565204/video/man-leading-meeting-motivating-hackers-coding-for-charity.mp4?s=mp4-640x640-is&k=20&c=aWNBY2zDZbeJTL5hF-8aPCG_C8hmWiNiSFPcHe3Q5cQ=" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="relative z-10">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                <div className="grid grid-cols-2 gap-4">
                    {/* Redirecting "Find Teammates" to Home Page */}
                    <Link to="/home" className="bg-green-400 p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
                        <div className="text-black font-bold text-lg flex items-center justify-center space-x-2">
                            <FaUsers size={30} color="#000" />
                            <span>Find Teammates</span>
                        </div>
                        <p className="font-semibold text-white">Swipe to match with developers</p>
                    </Link>

                    <Link to="/ai-team-analyzer" className="bg-yellow-400 p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
                        <div className="text-black font-bold text-lg flex items-center justify-center space-x-2">
                            <FaRobot size={30} color="#000" />
                            <span>AI Team Analyzer</span>
                        </div>
                        <p className="font-semibold text-white">Check team compatibility</p>
                    </Link>

                    {/* Redirecting "Chat" to Home Page */}
                    <Link to="/home" className="bg-blue-400 p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
                        <div className="text-black font-bold text-lg flex items-center justify-center space-x-2">
                            <FaComments size={30} color="#000" />
                            <span>Chat</span>
                        </div>
                        <p className="font-semibold text-white">Message your connections</p>
                    </Link>

                    <Link to="/hackathon-explorer" className="bg-red-400 p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
                        <div className="text-black font-bold text-lg flex items-center justify-center space-x-2">
                            <FaCalendarAlt size={30} color="#000" />
                            <span>Hackathon Explorer</span>
                        </div>
                        <p className="font-semibold text-white">Find upcoming events</p>
                    </Link>
                </div>
            </div>

            {/* Navbar Fixed at Bottom */}
            <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg">
                <NavBar />
            </div>
        </div>
    );
};

export default Dashboard;
