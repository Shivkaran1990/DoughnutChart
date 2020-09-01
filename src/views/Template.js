import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Table} from 'react-bootstrap'

import {
  Route,
  BrowserRouter
} from "react-router-dom";
import DoughnutChart from "./pie & funnel charts/Doughnut Chart";



class Template extends Component {
  
  render() {    
    return (
		<div>
			<Navbar bg="dark" variant="dark">
				<button className="d-lg-none toggle-sidebar"><span className="navbar-toggler-icon"></span></button>
				<Navbar.Brand href="/">CanvasJS Examples</Navbar.Brand><span className="hidden-xs text-muted">React</span>
			  </Navbar>		  
			  <BrowserRouter>		  
					<Row>
						
						
						<Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container>
								<div className="content">
																	
									<DoughnutChart/>
									<Table >
										<tbody>
											<tr>
											<td rowSpan="7">
											<DoughnutChart/>
											</td>
												<td rowSpan="7">
											<DoughnutChart/>
											</td>
												<td rowSpan="7">
											<DoughnutChart/>
											</td>
											
											</tr>
										</tbody>
										</Table>


       
								</div>
							</Container>
						</Col>					
					</Row>			
			  </BrowserRouter>	
			</div>
    );
  }
}

export default Template;