import React from 'react'

function LoginForm(props) {
    return (
        <div className="form-wrapper">
            <form onSubmit={props.handleSubmit}>
                <h3>Log In</h3>
                <input
                    onChange={props.handleChange}
                    value={props.username}
                    name="username"
                    type="text"
                    placeholder="@Username"/>
                <input
                    onChange={props.handleChange}
                    value={props.password}
                    name="password"
                    type="password"
                    placeholder="#"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;