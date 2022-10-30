import React from 'react';
import './DisplayInfo.scss';
import logo from '../logo.svg';

class DisplayInfo extends React.Component {
	constructor(props) {
		console.log('>> call constructor');
		super(props);

		this.state = {
			showUserList: true,
		};
	}

	//Babel compiler
	// state = {
	// 	showUserList: true,
	// };

	componentDidMount = () => {
		console.log('>> call component did mount');

		setTimeout(() => {
			document.title = 'ngocdg';
		}, 3000);
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('>> call component did update', this.props, prevProps);
		if (this.props.users !== prevProps.users && this.props.users.length === 5) {
			alert('You got 5 users!');
		}
	};

	handleShowHide = (event) => {
		this.setState({ showUserList: !this.state.showUserList });
	};

	render() {
		console.log('call render');
		const { users } = this.props;

		return (
			<div className="display-info-container">
				{/* <img src={logo} alt="logo" /> */}
				<div>
					<span
						onClick={(event) => {
							this.handleShowHide(event);
						}}
					>
						{this.state.showUserList ? 'Hide' : 'Show'}
					</span>
				</div>
				<div>
					{this.state.showUserList &&
						users.map((e) => {
							return (
								<div key={e.id} className={e.age > 26 ? 'red' : 'green'}>
									{e.name}, {e.age}{' '}
									<button onClick={() => this.props.handleDeleteUserInfo(e.id)}>
										X
									</button>
									<hr />
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}

export default DisplayInfo;
