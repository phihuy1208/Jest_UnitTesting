const axios = require('axios');

class ListMember {
    constructor() {
        // Giả sử member được đưa và đã sắp xếp theo cắp bậc từ thấp đến cao
        this.listMember = []
        this.listTask = {}
    }

    getListMember = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.listMember = response.data.map(item => item.name);
    }
    /*
    example of listTask
    {
        'Phi Huy': [task1, task 2],
        'Kiet': [task3, task4],
        'Luan': [task1, task3]
    }
    */
    assignedTask = (name, task, taskId) => {
        const result = this.checkTask(name, taskId)

        if (result === true){
            try {
                this.listTask[name].push(task(taskId))
            }
            catch {
                this.listTask[name] = [task(taskId)]
            }
        }
        else if (result === false){
            return 'Member can not do this task'
        }
        else {
            return result
        }
    }
    /*
    Giả sử taskId 1 chỉ những người có cấp bậc nhỏ hơn 1
    Giả sử taskId 2 chỉ những người có cấp bậc nhỏ hơn 2
    Giả sử taskId 3 cho bất cứ ai 
     */
    checkTask = (name, taskId) => {
        const indexMember = this.listMember.indexOf(name) 
        if (indexMember === -1)
            return 'Name is not exist'
        else {
            if (indexMember >= taskId) {
                    return true
            }
            return false
        }
    }

}

module.exports = {
    ListMember: ListMember
}