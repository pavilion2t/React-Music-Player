import React, {Component} from 'react';
require('./progress.less');
//进度条组件

export class Progress extends Component {
	constructor(props) {
		super(props);

	}

	changeProgress(e) {
		let progressBar = this.refs.progressBar;
		let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
		this.props.onProgressChange && this.props.onProgressChange(progress);
	}

    render() {
        return (
        	<div className="components-progress" ref="progressBar" onClick={this.changeProgress}>
        		<div className="progress" style={{width: `${this.props.progress}%`, background: "#2f9842"}}></div>
        	</div>
        );
    }
}

export default Progress;
