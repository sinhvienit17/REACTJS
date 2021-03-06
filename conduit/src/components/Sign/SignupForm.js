import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons';
import "./SignupForm.css"
import { Link } from "react-router-dom";
import axios from "axios"
function SignupForm(props) {
    const onFinish = values => {
        console.log('Success:', values);
        const postUser = async ({ txtemail, txtpassword }) => {
            console.log("email", txtemail, "pass", txtpassword)
            await axios.post(`https://conduit.productionready.io/api/users/login?email=${txtemail}&password=${txtpassword}`)
                .then(res => {
                    console.log("sign up success !");
                }).catch(err => {
                    console.log("sign up fail.....");
                })

        }
        postUser(values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basis"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item >
                <h1 style={{ color: 'black', fontSize: '42px', margin: '-10px 0px' }}>Sign Up</h1>
            </Form.Item>
            <Form.Item >
                <p style={{ color: 'black', margin: '0px' }}><Link exact to="/signin">Have an account ?</Link></p>
            </Form.Item>
            <Form.Item
                name="txtusername"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="txtemail"
                rules={[{ required: true, message: 'Please input your email!' },
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                ]}
            >
                <Input size="large" prefix={<GoogleOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="txtpassword"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password size="large" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
            </Form.Item>
            <Form.Item >
                <Button size="large" type="success" htmlType="submit" style={{ float: 'right', backgroundColor: "green", color: "white" }}>
                    Sign Up
                </Button>
            </Form.Item>
        </Form>
    );
}

export default SignupForm;