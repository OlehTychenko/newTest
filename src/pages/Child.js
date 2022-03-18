import React from 'react'

export class Child extends React.Component {
    render() {
        return (
        <>
            <tr onClick={this.props.onSelectUser} style={{backgroundColor: this.props.isUserSelected ? "yellow" : "white"}}>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.name}</td>
            </tr>
        </>
        )
    }
}
