import { useNavigate } from "react-router-dom"
import UserList from "../components/UserList"
import useRequest from "../hooks/useRequest"

const CreatePage = () => {
    const {loading,sendrequest} = useRequest({url:'/api/v1/todotasks',method:'POST'})
    const navigate = useNavigate()

    const onsubmit = (task) => {
        sendrequest([{task}]).then(() => navigate('/'))
    }

    if(loading) return <p>...loading</p>
    return(
        <div>
            <UserList action={onsubmit}/>
        </div>
    )
}

export default CreatePage