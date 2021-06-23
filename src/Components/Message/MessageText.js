import React, { useContext } from 'react'
import MessageContext from '../../Contexts/MessageContext';

const MessageText = () => {
    const {message} = useContext(MessageContext)

    return(
        message ? <span className="alert">{message}</span> : <span className="hide"></span>
    );
}

export default MessageText;