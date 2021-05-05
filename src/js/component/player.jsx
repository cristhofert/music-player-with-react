import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

export const Player = props => {
	const inputRef = useRef();
	const [pausa, setPausa] = useState(">");

	const pausar = () => {
		if (pausa === "❙❙") {
			setPausa(">");
			inputRef.current.play();
		} else {
			setPausa("❙❙");
			inputRef.current.pause();
		}
	};
	return (
		<>
			<div>
				<button className="btn btn-dark" onClick={props.playPrev}>
					<p>&lt;</p>
				</button>
				<button className="btn btn-dark" onClick={pausar}>
					<p>{pausa}</p>
				</button>

				<button className="btn btn-dark" onClick={props.playNext}>
					<p>&gt;</p>
				</button>
			</div>
			<audio
				ref={inputRef}
				src={props.songURL + props.song}
				autoPlay
				controls
				preload></audio>
		</>
	);
};

Player.propTypes = {
	song: PropTypes.string,
	songURL: PropTypes.string,
	playNext: PropTypes.func,
	playPrev: PropTypes.func
};
