import React from 'react'
import { Row, Col } from "antd"
import SigninForm from "./SigninForm"
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     NavLink
// } from "react-router-dom";
function Signin(props) {
    return (
        <Row>
            <Col offset={4}></Col>
            <Col span={16}><SigninForm /></Col>
            <Col offset={4}></Col>
        </Row>

    );
}

export default Signin;