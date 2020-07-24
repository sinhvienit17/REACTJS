import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Card, Button, List } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { Input, Row, Avatar } from 'antd';
import { ClearOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const { Meta } = Card;

function CommentCard(props) {
    const [refInput, setRef] = useState("");
    const token = useSelector(state => { return state.token.token })
    const comments = useSelector(state => { return state.comments.comments })
    const slug = props.item.slug
    // console.log("slug", slug)
    console.log("comments main", comments.comments)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "GET_DATA_BY_SLUG", slug: slug })
    }, [dispatch, slug])

    const handleSubmit = (e) => {
        console.log(refInput);
        dispatch({ type: "POST", body: refInput, slug: slug, token: token });
        setRef("");
        e.preventDefault();

    }

    const handleClear = (id) => {
        console.log("click !", id);
        dispatch({ type: "CLEAR_COMMENT", slug: slug, id: id, token: token })
    }
    return (
        <>
            <Row>
                {token === "" ?
                    <p style={{ color: 'black' }}>
                        <Link to="/signin">Sign in</Link> or <Link to="/singup">sign up</Link> to add comments on this article.
            </p>
                    : ""
                }
            </Row>
            <Row>
                <Card
                    style={{ padding: "0px" }}
                    actions={[
                        <Button style={{ float: "right" }} onClick={handleSubmit}>Post Comment</Button>
                    ]}
                >
                    <TextArea
                        value={refInput}
                        onChange={(event) => {
                            setRef(event.target.value)
                            event.preventDefault();
                        }}
                        defaultValue="Write some comment ..."
                        style={{
                            height: "100px", width: '40vw', left: "0px", top: '0px',
                            transform: "translateX(-10px)",
                            border: "none"
                        }}
                    ></TextArea>
                </Card>

            </Row>
            {
                token === "" ? "" :
                    <Row>
                        <List
                            // style={{ border: '1px solid black' }}
                            itemLayout="vertical"
                            dataSource={comments.comments}
                            renderItem={item => {
                                //console.log("", item);
                                //console.log("item in list", item);
                                return (

                                    <List.Item
                                    >
                                        <Card
                                            title={item.body}
                                            extra={<ClearOutlined
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => handleClear(item.id)}
                                            // disabled
                                            />}
                                        >
                                            <Meta
                                                style={{
                                                    width: '40vw',
                                                    color: 'grey'
                                                }}
                                                avatar={<Avatar src={item.author.image} />}
                                                title={item.author.username}
                                                description={item.createdAt}

                                            />
                                        </Card>
                                    </List.Item>
                                )
                            }}
                        >
                        </List>
                    </Row>
            }
        </>
    );
}

export default CommentCard;
