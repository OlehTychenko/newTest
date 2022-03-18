import React from 'react'
import {Child} from "./Child";

export class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            selectedUser: null
        }
    }

    selectUser = (user) => this.setState({selectedUser: user})

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(usersList => {
                this.setState({ users: usersList });
            });
    }

    render() {
        return (
            <>
                <table style={{width: '100%', textAlign: 'center'}}>
                    <tbody>
                    {
                        this.state.users.map(user => <Child user={user} key={user.id} onSelectUser={() => this.selectUser(user)} isUserSelected={user?.id === this.state.selectedUser?.id}/>)
                    }
                    </tbody>
                </table>
                {this.state.selectedUser && <h2>Recently clicked: {this.state.selectedUser.name}</h2>}
            </>
        )
    }
}
