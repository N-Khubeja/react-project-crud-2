import Header from "../components/Header";
import CreatePage from "../pages/CreatePage";
import DoneTasks from "../pages/DoneTasks";
import MainPage from "../pages/MainPage";
import UpdatePage from "../pages/UpdatePage";


const route = [
   {
        element:<Header/>,
        path:'/',
        children:[
            {
                element:<MainPage/>,
                index:true
            },
            {
                element:<CreatePage/>,
                path:'/create'
            },
            {
                element:<UpdatePage/>,
                path:'/tasks/:taskid'
            },
            {
                element:<DoneTasks/>,
                path:'/done'
            }
        ]
   }
]

export default route