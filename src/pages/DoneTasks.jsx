import useFetch from "../hooks/useFetch"
import useRequest from "../hooks/useRequest"

const DoneTasks = () => {
    const {error,loading,response,resend} = useFetch({url:'/api/v1/todonetasks',method:'GET'})
    const {sendrequest} = useRequest({method:'DELETE'})
    const donetask = response?.items.map((item) => {
        return {
            donetask:item.task,
            id:item._uuid
        }
    }) || []

    const ondelete = (taskid) => {
        sendrequest(null,`/api/v1/todonetasks/${taskid}`)
        .then(() => resend())
    }

    if(loading) return <p>...loading</p>
    if(error) return <p>...error</p>
    return(
        <div className="tasksdiv">
            {donetask.map((task) => <div className="task" key={task.id}> 
                <p>TASK:{task.donetask}</p>
                <button onClick={() => ondelete(task.id)}>delete</button>
            </div>)}
        </div>

        
    )

}

export default DoneTasks