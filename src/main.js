
import HomePage from "./pages/Home"

import NotFoundPage from "./pages/NotFoundPage"
import ProjectDetailPage from "./pages/ProjectDetail"
import { router, render } from './lib'
import ProjectManagementPage from "./pages/Admin/ProjectManagement"
import AddProjectPage from "./pages/Admin/AddProject"
import UpdateProjectPage from "./pages/Admin/UpdateProject"
import Signin from "./pages/Signin"
import  Signup from "./pages/Signup"


const app = document.querySelector("#app") 


router.on('/', () => { 
    return render(HomePage, app)
})
router.on('/signup', () => { 
    return render(Signup, app)
})

router.on('/signin', () => { 
    return render(Signin, app)
})
router.on('/project/:id', ({ data }) => {
  
    return render(() => {
        return ProjectDetailPage(data)
    }, app) 
})
router.on('/admin/project', () => {
    return render(ProjectManagementPage, app)
})
router.on('/admin/project/add', () => {
    return render(AddProjectPage, app)
})
router.on('/admin/project/update/:id', ({ data }) => {
    return render(() => {
        return UpdateProjectPage(data)
    }, app)
})

router.notFound(() => { 
    return render(NotFoundPage, app)
})

router.resolve()  