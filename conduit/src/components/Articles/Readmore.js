import React from 'react';
import 'antd/dist/antd.css';
import './Readmore.css';
import { Card, Avatar } from 'antd'
const { Meta } = Card
function Readmore(props) {
    return (
        <section id="info">
            <Card>
                <Meta
                    avatar={<Avatar src={props.item.author.image} />}
                    title={props.item.author.username}
                    description={props.item.createdAt}
                />
            </Card>
        </section>
    );
}
export default Readmore;