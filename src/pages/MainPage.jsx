
import { Link, useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import useRequest from "../hooks/useRequest"

const MainPage = () => {
    const {error,loading,response,resend} = useFetch({url:'/api/v1/todotasks',method:'GET'})
    const {sendrequest} = useRequest({method:'DELETE'})
    const {sendrequest:todone} = useRequest({url:'/api/v1/todonetasks',method:'POST'})
    const navigate = useNavigate()
    const data = response?.items.map((item) => {
        return {
            task:item.task,
            id:item._uuid 
        }
    }) || [] 

    const ondelete = (taskid) => {
        sendrequest(null,`/api/v1/todotasks/${taskid}`)
        .then(() => resend())
    }

    const todonetasks = (taskid,task) => {
        todone([{task}])
        .then(()=> sendrequest(null,`/api/v1/todotasks/${taskid}`))
        .then(() =>  resend())
        .then(() => navigate('/done'))
    }

    
    if(error)  return <p>...error</p>
    if(loading)  return <p>...loading</p>
    return(
        <div className="tasksdiv">
            {data.map((task) => 
                <div className="task" key={task.id}>
                    <p>TASK:{task.task}</p>
                    <Link to={`/tasks/${task.id}`}>update</Link>
                    <div className="flex">
                        <button onClick={() => ondelete(task.id)}>delete</button> 
                        <button onClick={() => todonetasks(task.id,task.task)}>done</button>
                    </div>
                </div>
            )} 
        </div>
    )
}

export default MainPage