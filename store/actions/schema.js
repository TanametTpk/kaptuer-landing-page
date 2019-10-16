import { GET_SCHEMA , CREATE_SCHEMA , DELETE_SCHEMA } from '../types'
import API from '../../util/api'

export const getSchema = (projectId) => async dispatch => {

    let res = await API.generator.getDb(projectId)

    dispatch({
        type: GET_SCHEMA,
        payload: res.data
    })

    return res.data

}

export const createSchema = (schema) => async dispatch => {
    console.log(schema)
    let res = await API.generator.createDb(schema)
    console.log(res)
    dispatch({
        type: CREATE_SCHEMA,
        payload: res.data
    })

    return res.data

}

export const deleteSchema = (id) => async dispatch => {

    let res = await API.generator.deleteDb(id)

    dispatch({
        type: DELETE_SCHEMA,
        payload: res.data
    })

    return res.data

}