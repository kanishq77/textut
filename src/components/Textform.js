import React, { useState } from "react";

export default function Textform(props) {
	const [text, setText] = useState("");
	let wlength = 0;
	let t = text;
	if (text === "") {
		wlength = 0;
	} else {
		wlength = text.split(" ").length;
	}
	const handleUpCLick = () => {
		// console.log("UpClicked");
		let newText = text.toUpperCase();
		setText(newText);
	};
	const handleLoCLick = () => {
		// console.log("UpClicked");
		let newText = text.toLowerCase();
		setText(newText);
	};
	const handleClearCLick = () => {
		// console.log("UpClicked");
		let newText = "";
		setText(newText);
	};

	const handlefilename = (e) => {
		let filename = document.getElementById("filename").value;
		// console.log(filename);
		return filename; //returns filename to the below function
	};

	const clearfilename = (e) => {
		let name = (document.getElementById("filename").value = " ");
		return name;
	};

	const handleCopyCLick = () => {};
	const handleDownload = () => {
		const file = JSON.stringify(t);
		// console.log(fileData);
		let fileData = file.replace(/^"(.*)"$/, "$1");
		const blob = new Blob([fileData], { type: "text/plain" }); //storing the stringified data into a blob
		const url = URL.createObjectURL(blob); //creating a url
		const link = document.createElement("a");
		// console.log(handlefilename());
		link.download = handlefilename(); //calling the above function to get the filename given by the user
		link.href = url;
		link.click();
	};

	const handleOnChange = (event) => {
		// console.log("OnCHange");
		setText(event.target.value);
	};

	return (
		<>
			<div className="container">
				<h1>{props.heading}</h1>

				<div className="mb-3">
					<textarea
						value={text}
						className="form-control"
						onChange={handleOnChange}
						id="MyBox"
						rows="7"
					></textarea>
				</div>
				<button
					className="btn btn-primary my2 mx-1"
					onClick={handleUpCLick}
				>
					Convert to Uppercase
				</button>
				<button
					className="btn btn-primary my-2 mx-1"
					onClick={handleLoCLick}
				>
					Convert to LowerCase
				</button>

				<button
					className="btn btn-primary my-2 mx-1"
					onClick={handleCopyCLick}
				>
					📋
				</button>
				<button
					className="btn btn-danger my-2 mx-1"
					onClick={handleClearCLick}
				>
					Clear text
				</button>
				<br />
				<br />
				<p>
					<b>Enter the filename to download: </b>
				</p>
				<input
					type="text"
					id="filename"
					defaultValue={""}
					onChange={handlefilename}
				></input>
				<button
					id="download"
					className="btn btn-success mx-1"
					onClick={handleDownload}
				>
					Download
				</button>

				<button
					id="clear"
					className="btn btn-danger mx-1"
					onClick={clearfilename}
				>
					X
				</button>
			</div>
			<div className="container my-4">
				<h2>Your Text Summarry</h2>
				<p>
					{wlength} words and {text.length} characters
				</p>
				<p>{0.008 * wlength} Minutes to read the entire text</p>
				<h2>Preview</h2>
				<p>{text}</p>
			</div>
		</>
	);
}
