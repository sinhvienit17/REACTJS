import React, { useEffect } from 'react'
import { Tag, Card } from 'antd';
import './Tags.css'
import { showTag, getTagList } from '../../actions/TagAction'
import { useDispatch, useSelector } from 'react-redux';

function Tags() {
    const dispatch = useDispatch();
    const tags = useSelector(state => {
        return state.tagList.tags
    })
    useEffect(() => {
        dispatch(getTagList());
    }, [dispatch])
    const handleClick = (tag) => {
        try {
            console.log("tag click la :", tag);
            dispatch(showTag({ tag }));

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Card className="card" title="Popular Tags" style={{ width: '300px', backgroundColor: '#F3F3F3' }}>
            {tags.map((tag, index) => {
                return <Tag
                    key={index}
                    className="tagger"
                    onClick={() => handleClick(tag)}
                >
                    {tag}
                </Tag>
            })}
        </Card>
    );
}

export default Tags;
