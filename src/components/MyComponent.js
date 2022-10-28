import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Thanh Hoang', age: '48' },
            { id: 2, name: 'Thanh Huy', age: '41' },
            { id: 3, name: 'Thien Nha', age: '28' },
            { id: 4, name: 'Dinh Tung', age: '33' },
            { id: 5, name: 'Hoang Quan', age: '38' }
        ]
    }
    //DRY don't repeat yourself
    //JSX
    render() {
        return (
            <div>
                <UserInfo />
                <br />
                <DisplayInfo listUsers={this.state.listUsers} />
            </div>
        );

    }
}

export default MyComponent;