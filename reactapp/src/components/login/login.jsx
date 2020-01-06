import React from "react";
import loginImg from "../../logo.svg";

export class login extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return <div className="base-container">
            <div className="header">login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">username</label>
                        <input type="text" name="usename" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                </div>
            </div>
             <div className="footer">
                 <button type="button" className="btn">
                     login
                 </button>
             </div>
        </div>


    }



}