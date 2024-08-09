import React from "react";
import Navbar from './Navbar'
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

//create your first component
const Home = () => {
	return (<>
		<Navbar />
		<Header />
		<Main />
		<Footer />
	</>
	);
};

export default Home;
