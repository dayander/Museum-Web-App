import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {ExhibitList} from "../exhibits/ExhibitList";
import {getExhibits} from '../../stateControllers/actions/getExhibits';





class ExhibitPage extends React.Component{

    constructor(props){
        super(props);
    }


    componentDidMount(){

        this.props.getExhibits()

    }


    render(){

        const {exhibits} = this.props;

        console.log('exhibits', exhibits);
    return(
        <div>
            <Link to={'/exhibits/newexhibit'}> Add New Exhibit </Link>

            <ExhibitList exhibits={exhibits}/>



        </div>
    )
    }

};


const mapStateToProps = (state) =>{
    return(
        {
            exhibits: state.exhibits

        }
    )
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getExhibits
    },dispatch)
};



export default connect(mapStateToProps, mapDispatchToProps)(ExhibitPage);