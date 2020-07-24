import React from 'react';
import 'antd/dist/antd.css';
import Signin from "./components/Sign/Signin"
import Signup from "./components/Sign/Signup"
import Banner from './components/Home/Banner'
import Headers from './components/Home/Headers.js'
import MainView from './components/Articles/MainView'
import { Row, Col } from 'antd'
import Tags from './components/Tag/Tags'
import Footer from './components/Home/Footer'
import Articles from "./components/Articles/Articles"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Row>
        <Col span={24}>
          <Headers />
        </Col>
      </Row>
      <Switch>
        <Route exact path="/">
          <Row>
            <Col span={24}><Banner style={{ marginBottom: '50px' }} /></Col>
          </Row>
          <Row>
            <Col offset={4}></Col>
            <Col span={12}><MainView /></Col>
            <Col span={6}><Tags /></Col>
            <Col span={2}></Col>
          </Row>
        </Route>
        <Route exact path="/signin">
          <Row>
            <Col offset={6}></Col>
            <Col span={12}><Signin /></Col>
            <Col offset={6}></Col>
          </Row>
        </Route>
        <Route exact path="/signup">
          <Row>
            <Col offset={6}></Col>
            <Col span={12}><Signup /></Col>
            <Col offset={6}></Col>
          </Row>
        </Route>
        <Route exact path="/articles">
          <Articles />
        </Route>
      </Switch>
      <Row>
        <Col span={24} style={{ height: '52px' }}></Col>
        <Col span={24}><Footer /></Col>
      </Row>
    </Router>
  );
}

export default App;
