import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
	<div>
	<Head>
		<title>Audio-Boy</title>
	</Head>
		<Navbar />
		<div className='container'>
			{props.children}
		</div>
	</div>
);

export default Layout;