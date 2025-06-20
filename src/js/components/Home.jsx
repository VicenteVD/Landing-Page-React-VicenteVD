import React from "react";

//include images into your bundle
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";

import Footer from "./Footer";
import GrupoCartas from "./GrupoCartas";
//create your first component

const Home = () => {
	return (
		<>


			<Navbar />



			<Jumbotron />



			<GrupoCartas />



			<Footer />

		</>


	);


};

export default Home;