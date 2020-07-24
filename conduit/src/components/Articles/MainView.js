import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import './MainView.css'
import { useSelector, useDispatch } from 'react-redux';
import Lists from './List'
import { getDataDefault } from '../../actions/MainviewAction';
import { getDataByPage } from "../../actions/page"


const { TabPane } = Tabs

function MainView() {
    const token = useSelector(state => state.token.token);
    const yourFeed = useSelector(state => state.tag.yourFeed);
    const loading = useSelector(state => { return state.tag.loading });
    const [offset, setOff] = useState("0");
    const dispatch = useDispatch();

    const articles = useSelector(state => { return state.tag.articles });
    const global = useSelector(state => { return state.defaults.articles });
    const tagItem = useSelector(state => state.tag.tagItem)
    useEffect(() => {
        dispatch(getDataDefault());
    }, [dispatch])

    console.log("tagName", tagItem)
    console.log("main view dax nhan articles ", articles.articles)

    const handleClick = (key) => {
        console.log("click", key)
        if (key === "0") {
            dispatch({ type: "COME_YOUR_FEED" })
        }
        if (key === "1") {
            dispatch({ type: "COME_DEFAULT" })
        }
    }
    const handleOffset = (page) => {
        console.log("gui", page)
        setOff(`${page}`);
        //dispatch lay du lieu tu api
        dispatch(getDataByPage({ page: (page - 1) * 10, tagName: tagItem }));

    }
    return (
        <>
            {token !== "" ?
                <Tabs activeKey={yourFeed && tagItem === "" ? "0" : tagItem !== "" ? "2" : "1"} onTabClick={(key, onClick) => { handleClick(key) }}>
                    <TabPane tab="Your Feed" key="0"
                        style={{ color: 'green' }}
                    >
                        No articles are here ... yet
                </TabPane>
                    <TabPane tab="Global Feed" key="1"
                        style={{ color: 'green' }}
                    >
                        <Lists articles={global.articles} offsett={offset} loading={loading} v_offset={(page) => handleOffset(page)}></Lists>
                    </TabPane>
                    <TabPane tab={tagItem} key="2" style={{ color: 'green' }} >
                        <Lists articles={articles.articles} offsett={offset} loading={loading} v_offset={(page) => handleOffset(page)} ></Lists>
                    </TabPane>
                </Tabs>
                :
                <Tabs activeKey={tagItem === "" ? "1" : "2"} onTabClick={(key, onClick) => { handleClick(key) }}>
                    <TabPane tab="Global Feed" key="1"
                        style={{ color: 'green' }}
                    >
                        <Lists articles={global.articles} offsett={offset} loading={loading} v_offset={(page) => handleOffset(page)}></Lists>
                    </TabPane>
                    <TabPane tab={tagItem} key="2" style={{ color: 'green' }} >
                        <Lists articles={articles.articles} offsett={offset} loading={loading} v_offset={(page) => handleOffset(page)} ></Lists>
                    </TabPane>
                </Tabs>
            }


        </>
    );
}

export default MainView;

