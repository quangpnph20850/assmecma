import { getOne, } from "../api/project"
import { useEffect, useState } from "../lib"


    
const ProjectDetailPage = ({id}) => {
    const [projects, setProject] = useState([])
    useEffect(() => {
        getOne(id).then(({ data }) => setProject(data))
    }, [])

    return /*html*/`
    <h1>Detail Page</h1>
    <table>
        <thead>
            <tr>
            <th>Stt</th>
            <th>Project Title</th>
            <th>Project Content</th>
            <th>Project Image</th>
            <th>Project Url</th>
            <th>Project Repository</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>${projects.id}</td>
            <td>${projects.title}</td>
            <td>${projects.description}</td>
            <td><img src="${projects.image}"></td>
            <td>${projects.url}</td>
            <td>${projects.repository}</td>
        </tr>
        </tbody>
            </table>
    `


}

export default ProjectDetailPage