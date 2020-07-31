import axios from 'axios'
const baseUrl = '/api/bowls'

let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

/* alternate implementation of getAll for reference 
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then((repsonse) => response.data)
}
*/

const create = async (newObject) => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then((repsonse) => repsonse.data)
}

const deleteBowl = async (id) => {
    const config = {
        headers: { Authorization: token },
    }

    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response.data
}

export default { getAll, create, update, deleteBowl, setToken }
