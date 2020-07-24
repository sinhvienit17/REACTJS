import React from 'react';
import 'antd/dist/antd.css';
import './Banner.css';
class Banner extends React.Component {
    render() {
        return (
            <section id="banner">
                <span>
                    <h1 >conduit</h1>
                    <p> A place to share your knowledge</p>
                </span>
            </section>
        );
    }
}

export default Banner;