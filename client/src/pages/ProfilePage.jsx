import { useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Header } from "../components/Header";
import { useAuthStore } from "../store/useAuthStore";
import { useUserStore } from "../store/useUserStore";



const ProfilePage = () => {
	const { authUser } = useAuthStore();
	const { loading, updateProfile } = useUserStore();

	const [name, setName] = useState(authUser.name || "Rahul Sharma");
	const [title, setTitle] = useState(authUser.title || "Full-stack Developer | AI Enthusiast");
	const [bio, setBio] = useState(authUser.bio || "Passionate about building innovative solutions and exploring new technologies.");
	const [skills, setSkills] = useState(["JavaScript", "React", "Node.js", "Python", "Machine Learning", "AWS"]);
	const [hackathon, setHackathon] = useState({
		name: "AI Innovation Challenge",
		position: "1st Place Winner",
		details: "Built an AI-powered personal assistant",
	});
	const [image, setImage] = useState(authUser.image || "data:image/jpeg;base64,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");

	const fileInputRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		updateProfile({ name, title, bio, skills, hackathon, image });
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col">
			<Header />
			<div className="flex-grow flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
					<button
						onClick={() => fileInputRef.current.click()}
						className="absolute right-6 top-6 bg-black text-white px-3 py-2 rounded-md text-sm"
					>
						✏ Edit Profile
					</button>
					<img src={image} alt="Profile" className="w-24 h-24 mx-auto rounded-full border-4 border-gray-200" />
					<h1 className="text-xl font-bold mt-4">{name}</h1>
					<p className="text-gray-600">{title}</p>
					<p className="text-gray-500 text-sm mt-2">{bio}</p>
					<div className="flex justify-center mt-3 space-x-3">
						<a href="#" className="text-gray-700"><FaGithub size={20} /></a>
						<a href="#" className="text-blue-500"><FaLinkedin size={20} /></a>
					</div>
				</div>

				{/* Skills Section */}
				<div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-4">
					<h2 className="font-bold text-lg">Skills</h2>
					<div className="flex flex-wrap mt-2">
						{skills.map((skill, index) => (
							<span key={index} className="bg-gray-200 text-sm px-3 py-1 rounded-full mr-2 mt-2">{skill}</span>
						))}
					</div>
				</div>

				{/* Hackathon Experience */}
				<div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-4">
					<h2 className="font-bold text-lg">Hackathon Experience</h2>
					<div className="bg-gray-100 p-4 rounded-lg mt-2">
						<p className="font-bold">{hackathon.name}</p>
						<p className="text-sm text-gray-600">{hackathon.position}</p>
						<p className="text-sm text-gray-500 mt-1">{hackathon.details}</p>
					</div>
				</div>

				{/* Update Profile Button */}
				<form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
					<button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" disabled={loading}>
						{loading ? "Saving..." : "Save"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default ProfilePage;