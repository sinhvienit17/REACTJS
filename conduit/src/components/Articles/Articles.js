import React from 'react';
import Readmore from "./Readmore"
import { Col, Row, Tag } from "antd"
import CommentCard from "./CommentCard"
import { useLocation } from 'react-router-dom';

function Articles(props) {
    const location = useLocation();
    const item = location.state.item;
    console.log("location:", location)
    console.log("item:", item)
    return (
        <>
            <Row>
                <Col span={24}><Readmore style={{ marginBottom: '50px' }} item={item} /></Col>
            </Row>
            <Row >
                <Col offset={2}></Col>
                <Col span={20}>
                    <p style={{ color: 'black', textAlign: 'left' }}>{item.slug}</p>
                    {item.tagList.map((tg, index) => {
                        return <Tag key={index}>{tg}</Tag>
                    })}
                    <hr></hr>
                </Col>
                <Col offset={2}></Col>
            </Row>
            <Row>
                <Col offset={6}></Col>
                <Col span={12}>
                    <CommentCard item={item} />
                </Col>
                <Col offset={6}></Col>
            </Row>
        </>
    );
}

export default Articles;