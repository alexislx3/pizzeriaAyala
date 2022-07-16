import { useState, createContext } from "react"

const Notification = ({message, severity}) =>{

const NotificationStyle = {
    position: 'absolute',
    top:100,
    right:5,
    width: 'auto',
    height: 'auto',
    backgroundColor: severity === 'error ' ? 'red' : 'green',
    color: 'white',
    padding:'10px 20px 10px 20px',
    borderRadius: '10px',

}

if(message === '')return

return(
    <div style={NotificationStyle}>
        {message}
    </div>
)
}
const NotificationContext = createContext ()

export const NotificationProvider = ({children}) => {
    const [msgConfig, setMsgConfig] = useState({
        severity: 'success',
        message:''
    })

    const setNotification = (sev, msg, timeout) => { 
        setMsgConfig ({severity: sev, message: msg})
        setTimeout(() => {
                setMsgConfig ({...msgConfig, message:''})
        },timeout *1000)

    }

    return(
        <NotificationContext.Provider value={ setNotification }>
            {/* { msgConfig.message !== '' && <Notification message={msgConfig.message} severity={msgConfig.severity}/>} */}
            <Notification message={msgConfig.message} severity={msgConfig.severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext

