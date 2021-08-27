import React,{useContext} from 'react'
import {Nav,Navbar, Container,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'
import '../style/dashboard.css'



function MyNav(props){
    const {signOut}= useContext(AuthContext)
    return(
        // style={{height:"7vh",background:"linear-gradient(120deg, rgba(72,151,216,1) 65%, rgba(255,219,92,1) 65%)"}}
        // background:"#2A7EC3"
        // style={{height:"7vh",background:"#2A7EC3"}}
        <Navbar expand="lg" className = 'customNav' style={{background:"#104F55"}} variant="dark" >
            <Container>
                <Navbar.Brand as={Link} to="/">
                            <img
                                alt=""
                                width="32"
                                height="30"
                                className="d-inline-block align-top"
                            />App Name
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link eventKey="1" as={Link} active={props.dActive}  to="/">Dashboard</Nav.Link>
                        <Nav.Link eventKey="2"as={Link} active={props.sActive} to="/summary">Summary </Nav.Link>
                    </Nav>
                    <Button  className= "ms-auto" variant="outline-light" onClick={signOut}>Sign Out</Button>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>    
    )

   
}








export default MyNav