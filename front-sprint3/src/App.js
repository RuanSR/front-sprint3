import { useState, useContext } from 'react'

import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
 
import MessageContext from './Contexts/MessageContext'

function App() {
  const [message, setMessage] = useState('');

  return (
    <div className="page-container">
      <Header/>
      <MessageContext.Provider value={{message, setMessage}}>
        <ShowMessage/>
        <Main/>
      </MessageContext.Provider>
      <Footer/>
    </div>
  );
}

const ShowMessage = () => {
  const {message} = useContext(MessageContext)

  return(
      message ? <span className="alert">{message}</span> : <span className="hide"></span>
  );
}

export default App;
