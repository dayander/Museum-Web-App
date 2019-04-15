import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {InputGroup, DropdownButton, MenuItem, Image, Col, Row, Well, Panel, FormControl, FormGroup,
    ControlLabel, Button, Form} from 'react-bootstrap';
//import {signupSubmitSubmit} from "./signupSubmit";






let LoginForm = props => {


    const { handleSubmit, errorMessage } = props;


    console.log(handleSubmit)
    return( <form onSubmit={handleSubmit}>



        <FormGroup>
            <ControlLabel htmlFor="email">Email</ControlLabel>
            <Field name="email" component="input" type="email" id='email' className='form-control' autoComplete={'none'}/>

        </FormGroup>
        <FormGroup>
            <ControlLabel htmlFor="password">Password</ControlLabel>
            <Field name="password" component="input" type="password" id='password' className='form-control' autoComplete={'none'}/>

        </FormGroup>
        {errorMessage}

        <Button type="submit">Submit</Button>






    </form>)
};

LoginForm = reduxForm({
    // a unique name for the form
    form: 'login',

})(LoginForm);

export default LoginForm