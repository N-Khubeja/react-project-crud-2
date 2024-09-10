import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import useRequest from "../hooks/useRequest"
import UserList from "../components/UserList"

const UpdatePage = () => {
    const {taskid} = useParams()
    const {response,loading,error} = useFetch({url:`/api/v1/todotasks/${taskid}`,method:'GET'})
    const{sendrequest} = useRequest({url:`/api/v1/todotasks/${taskid}`,method:'PUT'})
    const navigate = useNavigate()

    const onsubmit = (task) => {
        sendrequest({task})
        .then(() => navigate('/'))
        .catch((err) => console.log(err))
    }


    if(error || !response)  return <p>...error</p>
    if(loading && !response)  return <p>...loading</p>
    return(
        <div>
             <UserList action={onsubmit} deftask={response.task}/>
        </div>
    )
}

export default UpdatePage