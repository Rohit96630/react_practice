import React from 'react';
import { HashRouter , Link, Routes, Route } from 'react-router-dom';

import Aboutus from './about.js';
import PageFooter from './footer.js';
import MyHome from './home.js';
import Contactus from './contact';
import Register from './register';
import Login from './login';
import Service from './service.js';
import Project from './project.js';
import Customer from './customer.js';
import HookOne from './hook1.js';
import HookThree from './hook3.js';
import HookFour from './hook4.js';
import HookFive from './hook5.js';
import HookSix from './hook6.js';
import CompanyList from './hook7.js';
import ItemList from './hook9.js';
import Product from './hook11.js';
import Myclass1 from './class1';
import Myclass2 from './class2';
import Myclass3 from './class3';
import Myclass4 from './class4.js';
import Myclass5 from './class5.js';
import Myclass7 from './class7.js';

function App() {
	return (
				<HashRouter>
					<ul>
						<li><Link to="/service.html" className="menu"> Our Services</Link> </li>
						<li><Link to="/project.html" className="menu"> Project</Link> </li>
						<li><Link to="/customer.html" className="menu"> Customers</Link> </li>
						<li><Link to="/hookpage1" className="menu"> Hook-1</Link> </li>
						<li><Link to="/hookpage3" className="menu"> Hook-3</Link> </li>
						<li><Link to="/hookpage4" className="menu"> Hook-4</Link> </li>
						<li><Link to="/hookpage6" className="menu"> New Item</Link> </li>
						<li><Link to="/hookpage5" className="menu"> Item List</Link> </li>
						<li><Link to="/company" className="menu"> C-Re-Use </Link> </li>
						<li><Link to="/item" className="menu"> Props </Link> </li>
						<li><Link to="/product/1/Mango/100/1.jpg" className="menu"> Product </Link> </li>
						<li><Link to="/class1" className="menu"> Class-1 </Link> </li>
						<li><Link to="/class2" className="menu"> Class-2 </Link> </li>
						<li><Link to="/class3" className="menu"> Class-3 </Link> </li>
						<li><Link to="/class4" className="menu"> Class-4 </Link> </li>
					</ul>
					<Routes>
						<Route exact path="/" element={<MyHome/>}/>
						<Route exact path="/class1" element={<Myclass1/>}/>
						<Route exact path="/class2" element={<Myclass2/>}/>
						<Route exact path="/class3" element={<Myclass3/>}/>
						<Route exact path="/class4" element={<Myclass4/>}/>
						<Route exact path="/class5" element={<Myclass5/>}/>
						<Route exact path="/class7" element={<Myclass7/>}/>
						<Route exact path="/product/:pid/:pname/:price/:pic" element={<Product/>}/>
						<Route exact path="/item" element={<ItemList/>}/>
						<Route exact path="/company" element={<CompanyList/>}/>
						<Route exact path="/hookpage6" element={<HookSix/>}/>
						<Route exact path="/hookpage5" element={<HookFive/>}/>
						<Route exact path="/hookpage4" element={<HookFour/>}/>
						<Route exact path="/hookpage3" element={<HookThree/>}/>
						<Route exact path="/hookpage1" element={<HookOne/>}/>
						<Route exact path="/about.html" element={<Aboutus/>}/>
						<Route exact path="/contact.html" element={<Contactus/>}/>
						<Route exact path="/register.html" element={<Register/>}/>
						<Route exact path="/login.html" element={<Login/>}/>
						<Route exact path="/service.html" element={<Service/>}/>
						<Route exact path="/project.html" element={<Project/>}/>
						<Route exact path="/customer.html" element={<Customer/>}/>
					</Routes>

					<PageFooter/>
				</HashRouter>
		   )
}
export default App;
