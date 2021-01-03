import axios from "axios";
import * as URL from './constant';


export function GetText() {

    return (dispatch) => {
        return axios.get(URL.POST)
            .then((response) => {
                dispatch(Get(response.data));
                // console.log('[In axios Get]:', response.data);

            })
    }
}

export function PostText(data1) {
    const data = {
        text: data1
    }
    return (dispatch) => {
        return axios.post(URL.POST, data)
            .then((response) => {
                dispatch(Post(response.data));
                // console.log('[In axios Post]:', response.data);
            })
    }

}


export function DeleteText(id) {
    return (dispatch) => {
        return axios.delete(URL.UPDATE + id)
            .then((response) => {
                dispatch(Delete(id));
                // console.log('[In axios Delete]:', response.data);
            })
    }

}


export function EditText(id, data) {

    const data1 = {
        text: data,
        "status": false
    }
    return (dispatch) => {
        return axios.put(URL.UPDATE + id, data1)
            .then((response) => {
                dispatch(Edit(response.data));
                // console.log('[In axios Editdate]:', response.data);
            })
    }
}

export function CheckedText(id, data) {
    const data1 = {
        text: data,
        "status": true
    }
    return (dispatch) => {
        return axios.put(URL.UPDATE + id, data1)
            .then((response) => {
                dispatch(Checked(response.data));
                // console.log('[In axios checkedText]:', response.data);
            })
    }
}


export function Get(data) {
    return {
        type: "GET_TEXT",
        text: data
    }
}

export function Post(data) {

    return {
        type: "POST_TEXT",
        text: data
    }
}
export function Edit(data) {

    return {
        type: "EDIT_TEXT",
        text: data
    }
}
export function Delete(data) {

    return {
        type: "DELETE_TEXT",
        text: data
    }
}
export function Checked(data) {
    return {
        type: "CHEDKED_TEXT",
        text: data
    }
}