import React from 'react';
import './HeaderMain.css';
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import header from '../../../images/images/rectangle13.png';

const HeaderMain = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <h2 class="heading">FIND YOUR HOUSE RENT</h2>
            <Row className="justify-content-center searchBar">
        <Col xs={12} sm={6} md={4} lg={4}>
          <Form inline>
            <FormControl
              id="searchBar"
              type="text"
              placeholder="Search...."
              className=" ml-sm-2"
            />
            <Button type="submit" class="search">Search</Button>
          </Form>
        </Col>
      </Row>
        </div>
    );
};

export default HeaderMain;