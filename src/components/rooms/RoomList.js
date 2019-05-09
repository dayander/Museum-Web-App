import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'




export const RoomList = (props) =>{

    const {rooms} = props;

    console.log(rooms);


    const roomsList = rooms.map((rooms, i) =>{


        return(
            <li key={i}>
                <span>  {rooms.name}  </span>
                <span>  </span>
                <span>  Number of exhibits in room  {rooms.exhibits.length}</span>

                <Link to={`/rooms/${rooms._id}`}>
                    Edit {rooms.name}
                </Link>




            </li>
        )
    })


    return(
        <div>
            <ol>
                {roomsList}
            </ol>
        </div>
    )
}