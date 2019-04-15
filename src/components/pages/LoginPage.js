import React from 'react'
import LoginForm from '../login/loginForm';
import {Well, Row, Col, Panel} from  'react-bootstrap';

import {loginSubmit} from "../../stateControllers/actions/login";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class LoginPage extends React.Component {

    componentDidMount(){
        console.log(this.props)
    }

    submit = values => {

        this.props.loginSubmit(values, ()=>{
            this.props.history.push('./')
        });


    };
    render() {
        return (
            <div>
                <Col xs={12}>
                    <Panel>
                        <LoginForm onSubmit={this.submit} errorMessage={this.props.errorMessage} />
                    </Panel>
                </Col>

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    errorMessage: state.auth.errorMessage
});

const mapActionToDispatch= (dispatch)=>{
    return bindActionCreators({
        loginSubmit,
    }, dispatch)

};


export default connect(mapStateToProps, mapActionToDispatch)(LoginPage);