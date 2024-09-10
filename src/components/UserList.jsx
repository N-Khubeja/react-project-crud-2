import { useRef } from "react"

const UserList = ({action,deftask}) => {
    const inputref = useRef()

    const onsubmit = (e) => {
        e.preventDefault()
        if(inputref.current.value) action(inputref.current.value)
    }
        

    return(
        <div className="form">
            <form onSubmit={onsubmit}>
                <input type="text" ref={inputref} placeholder="for task" defaultValue={deftask}/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default UserList