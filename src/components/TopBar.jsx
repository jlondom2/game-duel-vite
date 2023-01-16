import React, { Component } from 'react';


import { Container, Row, Button } from "react-bootstrap";

const TopBar = () => {
  return (
  <>

<div className="top-bar">


    <Container>
        <Row className="d-flex align-items-center">
            <div className="col-md-6">

            <div className="d-md-flex align-items-center justify-content-start"> 
            <p className="mb-0 me-3">Welcome to GAME DUEL</p> 

            <p className="mb-0 me-3">|</p>   
            <p className="mb-0">Currency: <span className="text-primary">USD</span> <span className="iconify" data-icon="ep:arrow-down"></span> </p> 
            </div>
                   
            </div>   
            <div className="col-md-6">
           
                <div className="d-flex align-items-center justify-content-end">
                    <a href="" className="me-5">
                        <div className="d-flex align-items-center">
                        <span className="iconify" data-icon="fa-solid:user-circle"></span>
                        <span className="ms-2 user-name-top">Juan Londono</span>
                        </div>
                    </a>
                    <Button className="button tiny red log-button d-flex align-items-center">Logout 
                     <span className="iconify ms-1" data-icon="ph:caret-circle-double-right-fill"></span>
                     </Button>
                </div>

            </div>       
        </Row>
     
    </Container>

</div>
  </>
  );
};

export default TopBar;
