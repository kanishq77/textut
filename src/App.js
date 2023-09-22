import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navigate from "./components/Navigate";
import Textform from "./components/Textform";

function App() {
	const [darkMode, setdarkMode] = useState(false);

	return (
		<>
			<Navigate title="TextUtils" mode={darkMode} />
			<div className="container my-3">
				<Textform heading="Enter the text to analyse" />
				{/* <About></About> */}
			</div>
		</>
	);
}

export default App;
