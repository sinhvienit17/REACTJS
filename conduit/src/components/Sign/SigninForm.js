import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./SigninForm.css"
import { Link, Redirect } from "react-router-dom";
import { setUserToken } from "../../actions/page"

const SigninForm = props => {

    const token = useSelector(state => state.token.token);
    console.log("token in sign start:", token);
    const dispatch = useDispatch();
    const onFinish = values => {
        console.log('Success:', values);
        const checkUser = async ({ mail, pass }) => {
            console.log("email", mail, "pass", pass)
            await axios({
                'method': 'POST',
                'url': 'https://conduit.productionready.io/api/users/login',
                'data': {
                    "user": {
                        "email": `${mail}`,
                        "password": `${pass}`,
                    }
                },
            })
                .then(res => {
                    console.log("sign in success !");
                    console.log("reponse token: ", res.data.user.token);
                    localStorage.setItem("token", res.data.user.token);
                    dispatch(setUserToken(res.data.user.token));
                    dispatch({ type: "COME_YOUR_FEED" });


                }).catch(err => {
                    console.log("sign in fail.....", err);
                    alert("Email or Password is wrong !");
                    // window.location.reload(false);
                })

        }
        checkUser(values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item >
                <h1 style={{ color: 'black', fontSize: '42px', margin: '-10px 0px' }}>Sign In</h1>
            </Form.Item>
            <Form.Item >
                <p style={{ color: 'black', margin: '0px' }}><Link to="/signup">Need an account ?</Link></p>
            </Form.Item>
            <Form.Item
                name="mail"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="pass"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input.Password size="large" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
            </Form.Item>
            <Form.Item >
                <Button size="large" type="success" htmlType="submit" style={{ float: 'right', backgroundColor: "green", color: "white" }}>
                    Sign In
                </Button>
            </Form.Item>
            {token !== '' ? <Redirect to="/" /> : <Redirect to="/signin" />}
        </Form>
    );
};
export default SigninForm;