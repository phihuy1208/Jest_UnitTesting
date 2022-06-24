const axios = require('axios');

class ListMember {
    constructor() {
        this.listMember = []
    }

    getListMember = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.listMember = response.data.map(item => item.name);
    }
}

module.exports = {
    ListMember: ListMember
}