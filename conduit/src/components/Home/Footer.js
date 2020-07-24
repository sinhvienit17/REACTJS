import React from 'react'
import { GithubOutlined } from '@ant-design/icons';
import { Space, Col, Row } from 'antd';

function Footer(props) {
    const IconText = ({ icon, text }) => {
        return <Space
            style={{ height: '30px', width: '100vw', backgroundImage: 'linear-gradient(to right top, #644f5b, #584856, #4c4051, #403a4b, #333344, #2a3040, #212d3c, #182a37, #142933, #13282e, #132729, #152524)', justifyContent: 'center' }}
        >
            {React.createElement(icon)}
            {text}
        </Space>
    };
    return (
        <Row>
            <Col span={24} >
                <a href="/" style={{ position: 'fixed', color: 'white', bottom: '-22px' }}>
                    <IconText id="git" icon={GithubOutlined} text="Fork on Github"
                    />,
                    </a>
            </Col>
        </Row>
    );
}

export default Footer;
