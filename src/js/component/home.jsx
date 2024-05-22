import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (

		<div className="text-center">
			<h1 className="text-center mt-5">Contador</h1>
			<div className="row">
				<div className="col fs-1">
					<i className="fa fa-clock"></i>
				</div>
				<div className="col fs-1">
					{props.centenos}
				</div>
				<div className="col fs-1">
					{props.decimal}
				</div>
				<div className="col fs-1">
					{props.unidad}
				</div>

			</div>


		</div>

	);
};

export default Home;
