import React , {Component} from 'react';
import './listitem.less';
//部分改写成了ES6，PubSub是全局事件管理器
let PubSub = require('pubsub-js');

export class ListItem extends Component{
	constructor(props){
		super(props);
	}

//删除歌曲，P嵌套在Li里面，所以点击时会事件冒泡
	deleteHandler(item, event) {
		event.stopPropagation();
		PubSub.publish('DEL_MUSIC', item);
	}
//播放操作，发送事件，事件名为PLAY_MUSIC
	playMusic(item, e) {
		PubSub.publish('PLAY_MUSIC', item);
	}

  //focus表示是否为当前播放歌曲
  render() {
    	let item = this.props.data;
        return (
            <li
						  className={`row components-listitem${this.props.focus ? ' focus' : ''}`}
						  onClick={this.playMusic.bind(this, item)}
							>
                <p><span className="bold">{item.title}</span>  -  {item.artist}</p>
                <p className="-col-auto delete" onClick={this.deleteHandler.bind(this, item)}></p>
            </li>
        );
    }
};

export default ListItem;
