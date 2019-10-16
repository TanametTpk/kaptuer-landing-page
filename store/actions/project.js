import { GET_PROJECT , CREATE_PROJECT , DELETE_PROJECT } from '../types'
import API from '../../util/api'

export const getProject = (applicationID) => async dispatch => {

    let res = await API.app.getProject(applicationID)

    dispatch({
        type: GET_PROJECT,
        payload: res.data
    })

    return res.data

}

export const createProject = (project) => async dispatch => {

    let res = await API.app.createProject(project)

    dispatch({
        type: CREATE_PROJECT,
        payload: res.data
    })

    return res.data

}

export const deleteProject = (id) => async dispatch => {

    let res = await API.app.deleteProject(id)

    dispatch({
        type: DELETE_PROJECT,
        payload: res.data
    })

    return res.data

}