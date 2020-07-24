import React, { useEffect } from 'react';
import { Button, Layout } from 'antd';
import 'antd/dist/antd.css';
import "./Header.css"
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
const { Header } = Layout

function Headers() {
    const token = useSelector(state => state.token.token)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "AUTHORIZATION", token: localStorage.getItem("token") })
    }, [dispatch, token])
    const handleOut = () => {
        dispatch({ type: "CLEAR_TOKEN" })
        localStorage.setItem("token", '');
        //dispatch({ type: "COME_DEFAULT" })
    }
    return (
        <Header theme="light" style={{ backgroundColor: 'white' }} mode="horizontal">
            <Button type="link"><h2 style={{ color: 'green' }}>Conduit</h2></Button>
            <div style={{ float: 'right' }}>
                <Button type="link" style={{ color: 'black' }}><NavLink exact activeClassName="active" to="/">Home</NavLink></Button>
                {token === "" ?
                    <>
                        <Button type="link" style={{ color: 'black' }}><NavLink exact activeClassName="active" to="/signin">Sign In</NavLink></Button>
                        <Button type="link" style={{ color: 'black' }}><NavLink exact activeClassName="active" to="/signup">Sign Up</NavLink></Button>
                    </>
                    :
                    <> <Button type="link" style={{ color: 'black' }}><NavLink activeClassName="active" to="/signup">New Post</NavLink></Button>
                        <Button type="link" style={{ color: 'black' }}><NavLink activeClassName="active" to="/signup">Setting</NavLink></Button>
                        <Button onClick={handleOut} type="link" style={{ color: 'black' }}><NavLink activeClassName="active" to="/signin">Username</NavLink></Button>
                    </>
                }


            </div>
        </Header>
    );
}

export default Headers;
