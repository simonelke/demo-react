import React from 'react';
import DisplayInfo from './DisplayInfo';
import AddUserInfo from './AddUserInfo';

class MyComponent extends React.Component {
	state = {
		userList: [
			{ id: 1, name: 'ngocdg', age: 16 },
			{ id: 2, name: 'pnd', age: 26 },
			{ id: 3, name: 'ngocdg2', age: 69 },
		],
	};

	handleAddUserInfo = (info) => {
		this.setState({
			userList: [info, ...this.state.userList],
		});
	};

	handleDeleteUserInfo = (id) => {

		this.setState({
			userList: this.state.userList.filter((e) => e.id !== id),
		});
	};

	render() {
		return (
			<React.Fragment>
				<AddUserInfo handleAddUserInfo={this.handleAddUserInfo} />
				<br />
				<DisplayInfo
					users={this.state.userList}
					handleDeleteUserInfo={this.handleDeleteUserInfo}
				/>
			</React.Fragment>
		);
	}
}

export default MyComponent;
