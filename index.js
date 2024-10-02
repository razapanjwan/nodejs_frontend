const baseUrl = "http://localhost:3000"
const axios = require('axios')

const getHelloWorld = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/helloworld`)
        const responseData = response.data.message
        console.log(responseData);
        return responseData
    } catch (error) {
        console.error(error)
    }

}



getHelloWorld()