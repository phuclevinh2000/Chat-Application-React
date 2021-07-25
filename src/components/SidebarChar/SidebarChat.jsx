import { Avatar } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import "./sidebarchat.scss"
import db from '../../firebase'
import { Link } from 'react-router-dom'

const SidebarChat = ({ addNewChat, id, name }) => {
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(id)
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter name for chat room")

        if (roomName) {
            // do some thing with the database
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p>Last message...</p>
                </div>
            </div>
        </Link>
    ) : (
        <div className="sidebarChat" onClick={createChat}>
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat
