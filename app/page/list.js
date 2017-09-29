import React, {Component} from 'react';
import ListItem from '../components/listitem';
//音乐列表页面
export class List extends Component{
  constructor(props){
    super(props);
  }

    render() {
      //map返回一个新数组，不会影响之前数组
    	let Items = this.props.musicList.map((item) => {
    		return (
    			<ListItem
    				key={item.id}
    				data={item}
            focus={this.props.currentMusitItem === item}
    			></ListItem>
    		);
    	});
        return (
            <ul>{ Items }</ul>
        );
    }
};

export default List;
