import React from 'react';
import {withStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {newImageUpdate, revertToOldImage} from '../../stateControllers/actions/newImageUpdate';
import Button from '@material-ui/core/Button'
import {FileInputField} from "../forms/FileInputField";




const styles ={
    imageSize:{
        maxWidth: '300px',

    }
}






class ImageDisplay extends React.Component{

    constructor(props){
        super(props);

        this.newImageAction = this.newImageAction.bind(this);
        this.oldImageAction = this.oldImageAction.bind(this);
    }


    componentDidMount(){

    }

    newImageAction(){

        this.props.newImageUpdate(null, this.props.path)
    }

    oldImageAction(){
        this.props.revertToOldImage(null, this.props.path)
    }

    componentDidUpdate(){
        console.log('updated', this.props.path);
    }




    render(){

//let ImageDisplay = (props) =>{

        const{path, altText, classes, editImage, imageUpdateLabel, imageUpdateID, newImageUpdate, revertToOldImage} = this.props;


        const showImage = (
            <div>
                <img className={classes.imageSize}  src={`http://localhost:3090${path}`} alt={altText}  />

                <div>
                    <Button onClick={this.newImageAction}>
                        New Image
                    </Button>

                </div>
            </div>
        );

        const addNewImage = (
            <div>

                <FileInputField fieldLabel={imageUpdateLabel} fieldID={imageUpdateID} />

                <Button onClick={this.oldImageAction}>
                    Cancel
                </Button>
            </div>
        );

        return(
          <div>
              {editImage? addNewImage: showImage}
          </div>
        )
};




 };


ImageDisplay = withStyles(styles)(ImageDisplay)



const mapActionToDispatch = (dispatch)=>{
    return bindActionCreators({
        newImageUpdate,
        revertToOldImage

    }, dispatch)

};



export default connect(null, mapActionToDispatch) (ImageDisplay)