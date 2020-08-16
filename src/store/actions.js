import Axios from "axios"

export function addCourseAction(title, duration) {
    return { type: 'ADD_COURSE', title, duration }
}

export function deleteCourseAction() {
    return { type: 'DELETE_COURSE' }
}

export function fetchDataSuccess(data) {
    return { type: 'FETCH_DATA', data };
}
export function fetchData() {
    return dispatch => Axios.get('https://run.mocky.io/v3/6b6bfbdf-47dc-402d-b42c-df0966836c64').then(({ data }) => dispatch(fetchDataSuccess(data)));
}