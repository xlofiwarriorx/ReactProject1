import axios from "axios"

const instance = axios.create({
	withCredentials: true, 
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'f1971d87-f66a-41f1-9437-39083ce6032b'
	}
})

export const getUsers = (currentPage = 1, pageSize=10) => {
	return instance.get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true}).then(response => {return response.data})
}


