// import { useState } from "react";

// import LoginForm from "../components/LoginForm";
// import SignUpForm from "../components/SignUpForm";

// const AuthPage = () => {
// 	const [isLogin, setIsLogin] = useState(true);

// 	return (
// 		<div
// 			className='min-h-screen flex items-center justify-center bg-gradient-to-br
// 		from-red-500 to-pink-500 p-4
// 	'
// 		>
// 			<div className='w-full max-w-md'>
// 				<h2 className='text-center text-3xl font-extrabold text-white mb-8'>
// 					{isLogin ? "Sign in to Swipe" : "Create a Swipe account"}
// 				</h2>

// 				<div className='bg-white shadow-xl rounded-lg p-8'>
// 					{isLogin ? <LoginForm /> : <SignUpForm />}

// 					<div className='mt-8 text-center'>
// 						<p className='text-sm text-gray-600'>
// 							{isLogin ? "New to Swipe?" : "Already have an account?"}
// 						</p>

// 						<button
// 							onClick={() => setIsLogin((prevIsLogin) => !prevIsLogin)}
// 							className='mt-2 text-red-600 hover:text-red-800 font-medium transition-colors duration-300'
// 						>
// 							{isLogin ? "Create a new account" : "Sign in to your account"}
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default AuthPage;


//new shreya changes
import { useState } from "react";

import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='relative min-h-screen flex items-center justify-center bg-white p-4 text-black'>
            <video
                autoPlay
                loop
                muted
                className='absolute inset-0 w-full h-full object-cover z-0'
            >
                <source src="https://media.istockphoto.com/id/1003565204/video/man-leading-meeting-motivating-hackers-coding-for-charity.mp4?s=mp4-640x640-is&k=20&c=aWNBY2zDZbeJTL5hF-8aPCG_C8hmWiNiSFPcHe3Q5cQ=" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='relative z-10 w-full max-w-md'>
                <h2 className='text-center text-3xl font-extrabold text-white mb-8'>
                    {isLogin ? "Sign in to HackConnect" : "Create a HackConnect account"}
                </h2>

                <div className='bg-white shadow-xl rounded-lg p-8'>
                    {isLogin ? <LoginForm /> : <SignUpForm />}

                    <div className='mt-8 text-center'>
                        <p className='text-sm text-gray-600'>
                            {isLogin ? "New to HackConnect?" : "Already have an account?"}
                        </p>

                        <button
                            onClick={() => setIsLogin((prevIsLogin) => !prevIsLogin)}
                            className='mt-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300'
                        >
                            {isLogin ? "Create a new account" : "Sign in to your account"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;