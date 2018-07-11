import React from 'react';

// components
import Form from "./Form";
import Toggler from "./Toggler";

function App() {
    return (
        <div>
            <Toggler render={props => {
                const { toggled, handleToggle } = props;
                return (
                    <div>
                        <button onClick={handleToggle}>EDIT</button>
                        {toggled && <Form inputs={{
                            socialSecurity: "",
                            cc: "",
                            mothersMaidenName: ""
                        }}
                            submit={inputData => alert(JSON.stringify(inputData))}
                            render={props => {
                                const { handleSubmit, handleChange, inputs } = props;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <input onChange={handleChange} value={inputs.socialSecurity} name="socialSecurity" type="text" />
                                        <input onChange={handleChange} value={inputs.cc} name="cc" type="text" />
                                        <input onChange={handleChange} value={inputs.mothersMaidenName} name="mothersMaidenName" type="text" />
                                        <button>Submit</button>
                                    </form>
                                )
                            }}
                        />}
                    </div>
                )

            }} />
        </div>
    )
}

export default App;