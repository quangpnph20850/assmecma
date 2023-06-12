import { add } from "../../api/project";
import { router } from "../../lib";
import { useEffect } from "../../lib";

const AddProjectPage = () => {
    useEffect(() => {
        const addForm = document.querySelector("#add-form")
        addForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const newProject = {
                "title": document.querySelector("#title").value,
                "description": document.querySelector("#description").value,
                "image": document.querySelector("#img").value,
                "url": document.querySelector("#url").value,
                "repository": document.querySelector("#repository").value,
            }
            

            add(newProject).then(() => { router.navigate('/admin/project') })
        })


    })
    return /*html*/`
    
        <form action="" id="add-form" class="from">
                <input type="text" placeholder="Project title" id="title"/><br>
                <input type="text" placeholder="Project description" id="description"/><br>
                <input type="text" placeholder="image" id="img"/><br>
                <input type="text" placeholder="url" id="url"/><br>
                <input type="text" placeholder="repository" id="repository"/><br>
                <button>Add New Project</button>
            </form>
        
    `
}

export default AddProjectPage;