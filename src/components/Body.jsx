import React, { Component, useState } from 'react';

import { Container, Row, Button } from "react-bootstrap";
import Sidebar from './Sidebar'
import Center from './Center'
import Right from './Right'

export default function Body() {



  return (
      
        <div className="content py-5">

            <Container>
                <Row>
                    <div className="col-md-4">
                        <Sidebar></Sidebar>
                    </div>

                    <div className="col-md-6">
                        <Center></Center>
                    </div>

                    <div className="col-md-2">
                        <Right></Right>
                    </div>
                </Row>
            </Container>
        
      
      
        </div>

        
  );
}

