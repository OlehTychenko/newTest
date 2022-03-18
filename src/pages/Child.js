import React from 'react'

export class Child extends React.Component {
    render() {
        const { username, name } = this.props.user;
        return (
        <>
            <tr onClick={this.props.onSelectUser} style={{backgroundColor: this.props.isUserSelected ? "yellow" : "white"}}>
                <td>{username}</td>
                <td>{name}</td>
            </tr>
        </>
        )
    }
}
