import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import {Link} from 'react-router-dom'




const styles ={
    card:{
        maxWidth: 400
    },

    cardMedia:{
        padding: '10%'
    }


}


const ExhibitPreviewCard = (props) =>{

    const{classes} = props;





    return(
        <Card className={classes.card}>
            <CardHeader title={props.name} action={`Published: ${props.published}`}/>
            <CardMedia className={classes.cardMedia} image={`http://localhost:3090${props.imagePath}`}/>
            <CardContent>


            </CardContent>

            <CardActions>
                <Link to={`/editexhibit/${props.id}`}>
                    Edit {props.name}
                </Link>
            </CardActions>



        </Card>
    )

};




export default withStyles(styles)(ExhibitPreviewCard)
