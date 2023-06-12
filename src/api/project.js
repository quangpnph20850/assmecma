import instance from "./instance"

const getAll = () => {
    return instance.get('/projectList')
}
const getOne = (id) => {
    return instance.get(`/projectList/${id}`)
}
const remove = (id) => {
    return instance.delete(`/projectList/${id}`)
}
const add = (project) => {
    return instance.post(`/projectList`, project)
}
const update = (project) => { 
    return instance.put(`/projectList/${project.id}`, project)
}

const adduser = (project) => {
    return instance.post(`/projectList`, project)
}
export { getAll, remove, add, update, getOne,adduser }