import React, {Component} from 'react';
import './logo.less';

export class Logo extends Component{
	constructor(props){
		super(props);
	}
    render() {
        return (
        	<div className="row components-logo">
        		<img src="/static/images/logo.png" width="40" alt="" className="-col-auto"/>
        		<h1 className="caption">Music Player Build By React</h1>
        	</div>
        );
    }
};

export default Logo;
