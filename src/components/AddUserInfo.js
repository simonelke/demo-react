import React from 'react';

class AddUserInfo extends React.Component {
	state = {
		name: 'ngocdg',
		age: 21,
	};

	handleOnChangeName = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	handleOnChangeAge = (event) => {
		this.setState({
			age: event.target.value,
		});
	};

	handleOnSubmit = (event) => {
		event.preventDefault();
		this.props.handleAddUserInfo({
			id: Math.random(),
			name: this.state.name,
			age: this.state.age,
		});
	};

	render() {
		return (
			<div>
				{this.state.name}, {this.state.age}
				<form
					onSubmit={(event) => {
						this.handleOnSubmit(event);
					}}
				>
					<label>Your name: </label>
					<input
						type="text"
						value={this.state.name}
						onChange={(event) => this.handleOnChangeName(event)}
					/>

					<label>Your age: </label>
					<input
						type="text"
						value={this.state.age}
						onChange={(event) => this.handleOnChangeAge(event)}
					/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default AddUserInfo;
