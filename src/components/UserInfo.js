import React from "react";

class UserInfo extends React.Component {
    state = {
        name: "Huy Dinh",
        address: 'Binh Thanh',
        age: 41
    };
    handleOnChangeInput(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        });
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <label>Your age: </label>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo;