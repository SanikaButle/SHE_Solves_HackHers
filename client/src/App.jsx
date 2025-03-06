// import { Navigate, Route, Routes } from "react-router-dom";

// import HomePage from "./pages/HomePage";
// import AuthPage from "./pages/AuthPage";
// import ProfilePage from "./pages/ProfilePage"; // Import the ProfilePage component
// import ChatPage from "./pages/ChatPage";
// import Dashboard from "./pages/DashBoard"; // Import the Dashboard component
// import HackathonExplorer from "./pages/HackathonExplorer"; // Import the HackathonExplorer component
// import AITeamAnalyzer from "./pages/AITeamAnalyzer"; // Import the AITeamAnalyzer component
// import Notification from "./pages/Notification"; // Import the Notification component
// import ConnectionRequests from "./pages/ConnectionRequests"; // Import the ConnectionRequests component
// import Settings from "./pages/Settings"; // Import the Settings component
// import { useAuthStore } from "./store/useAuthStore";
// import { useEffect } from "react";
// import { Toaster } from "react-hot-toast";

// function App() {
//     const { checkAuth, authUser, checkingAuth } = useAuthStore();

//     useEffect(() => {
//         checkAuth();
//     }, [checkAuth]);

//     if (checkingAuth) return null;

//     return (
//         <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
//             <Routes>
//                 <Route path='/' element={authUser ? <HomePage /> : <Navigate to={"/auth"} />} />
//                 <Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to={"/"} />} />
//                 <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to={"/auth"} />} /> {/* Add the ProfilePage route */}
//                 <Route path='/chat/:id' element={authUser ? <ChatPage /> : <Navigate to={"/auth"} />} />
//                 <Route path='/dashboard' element={authUser ? <Dashboard /> : <Navigate to={"/auth"} />} /> {/* Add the Dashboard route */}
//                 <Route path='/hackathon-explorer' element={authUser ? <HackathonExplorer /> : <Navigate to={"/auth"} />} /> {/* Add the HackathonExplorer route */}
//                 <Route path='/ai-team-analyzer' element={authUser ? <AITeamAnalyzer /> : <Navigate to={"/auth"} />} /> {/* Add the AITeamAnalyzer route */}
//                 <Route path='/notifications' element={authUser ? <Notification /> : <Navigate to={"/auth"} />} /> {/* Add the Notification route */}
//                 <Route path='/requests' element={authUser ? <ConnectionRequests /> : <Navigate to={"/auth"} />} /> {/* Add the ConnectionRequests route */}
//                 <Route path='/settings' element={authUser ? <Settings /> : <Navigate to={"/auth"} />} /> {/* Add the Settings route */}
//             </Routes>

//             <Toaster />
//         </div>
//     );
// }

// export default App;

import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage"; // Find Teammates page
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";
import Dashboard from "./pages/DashBoard";
import HackathonExplorer from "./pages/HackathonExplorer";
import AITeamAnalyzer from "./pages/AITeamAnalyzer";
import Notification from "./pages/Notification";
import ConnectionRequests from "./pages/ConnectionRequests";
import Settings from "./pages/Settings";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
    const { checkAuth, authUser, checkingAuth } = useAuthStore();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    if (checkingAuth) return null;

    return (
        <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
            <Routes>
                {/* ✅ If logged in, go to /dashboard by default, otherwise go to /auth */}
                <Route path="/" element={authUser ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />} />
                
                {/* ✅ Separate route for HomePage (Find Teammates) */}
                <Route path="/home" element={authUser ? <HomePage /> : <Navigate to="/auth" />} />
                
                <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={authUser ? <Dashboard /> : <Navigate to="/auth" />} />
                <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/auth" />} />
                <Route path="/chat/:id" element={authUser ? <ChatPage /> : <Navigate to="/auth" />} />
                <Route path="/hackathon-explorer" element={authUser ? <HackathonExplorer /> : <Navigate to="/auth" />} />
                <Route path="/ai-team-analyzer" element={authUser ? <AITeamAnalyzer /> : <Navigate to="/auth" />} />
                <Route path="/notifications" element={authUser ? <Notification /> : <Navigate to="/auth" />} />
                <Route path="/requests" element={authUser ? <ConnectionRequests /> : <Navigate to="/auth" />} />
                <Route path="/settings" element={authUser ? <Settings /> : <Navigate to="/auth" />} />
            </Routes>

            <Toaster />
        </div>
    );
}

export default App;

