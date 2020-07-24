import React from 'react';
import { List } from 'antd';
import { Avatar, Space, Tag, Badge, Skeleton } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';

function Lists(props) {
    //const dispatch = useDispatch();
    console.log("list articles:", props.articles)
    const IconText = ({ icon, text }) => (
        <Space style={{ border: '2px solid black', padding: '3px', borderRadius: '4px' }} >
            {React.createElement(icon)}
            {text}
        </Space>
    )
    return (
        <div>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                        props.v_offset(page)
                    },
                    current: props.offsett,
                    pageSize: 10,
                    showQuickJumper: true
                }}

                dataSource={props.articles}
                renderItem={(item, indx) => {
                    return (
                        <List.Item
                            key={indx}
                            actions={[<Link to={{
                                pathname: "/articles",
                                state: { item: item }
                            }}> <b>Read more ...</b></Link>]}
                            extra={<Badge key={item.key} status="success"><IconText className="iconList" icon={HeartOutlined} text={item.favoritesCount} />
                            </Badge>}
                        >
                            <Skeleton loading={props.loading} active avatar>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.author.image} />}
                                    title={<a href="/" >
                                        <div className="longertitle" style={{ color: "green" }}>
                                            {item.author.username}
                                        </div>
                                    </a>}
                                    description={new Date(item.createdAt).toDateString()}
                                />
                                <Link to={{
                                    pathname: "/articles",
                                    state: { item: item }
                                }
                                }>
                                    <div>
                                        <h4 style={{ color: "black" }} className="longertitle" >{item.title}</h4>
                                        <span >{item.description}</span>
                                    </div>
                                    <div >
                                        {item.tagList.map((tl, index) => { return <Tag key={index} style={{ float: 'right' }}>{tl}</Tag> })}
                                    </div>
                                </Link>
                            </Skeleton>
                        </List.Item>
                    )
                }}
            />
        </div>
    );
}

export default Lists;