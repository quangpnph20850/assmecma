import { update,getOne } from "../../api/project"
import { router, useEffect, useState } from "../../lib"

const UpdateProjectPage = ({ id }) => {
   
    const [project, setProject] = useState({})

    
    useEffect(() => {
        getOne(id).then(({ data }) => setProject(data))
    }, [])

    
    useEffect(() => {
        const updateForm = document.querySelector("#update-form")
        
        updateForm.addEventListener("submit", (event) => {
            event.preventDefault() 
            const newData = {
                "id": id,
                "title": document.querySelector("#title").value,
                "description": document.querySelector("#description").value,
                "image": document.querySelector("#img").value,
                "url": document.querySelector("#url").value,
                "repository": document.querySelector("#repository").value,
            }
            

            update(newData).then(() => { router.navigate("/admin/project") })
        })
    })
    return /*html*/`
        <form action="" id="update-form" class="from">
            <input type="text" placeholder="Project title" id="title" value="${project.title}"/>
            <input type="text" placeholder="Project description" id="description" value="${project.description}"/>
            <input type="text" placeholder="image" id="img"  value="${project.image}"/><br>
            <input type="text" placeholder="url" id="url"  value="${project.url}"/><br>
            <input type="text" placeholder="repository" id="repository"  value="${project.repository}"/><br>
            <button>Update Project</button>
        </form>
    `
}

export default UpdateProjectPage