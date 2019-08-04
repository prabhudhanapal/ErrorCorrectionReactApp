import axios from 'axios'

const PERSONORDERS = 'personOrders'
const ERROR_CORRECTION_API_URL = 'http://ec2-54-85-78-66.compute-1.amazonaws.com:8080/'
const PERSON_API_URL = `${ERROR_CORRECTION_API_URL}/api/${PERSONORDERS}`

class PersonOrderService {

    retrieveAllPerson(name) {
        return axios.get(`${PERSON_API_URL}`);
    }
    createPerson(name, person) {
        return axios.post(`${PERSON_API_URL}/create`, person);
    }
}

export default new PersonOrderService()
