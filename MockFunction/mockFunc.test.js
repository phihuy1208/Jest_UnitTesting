
const listMembers = require('./mockFunc')
let ListMember = listMembers.ListMember;

const myTeam = new ListMember()
const axios = require('axios'); 
jest.mock('axios');

const mockTask = jest.fn((taskIndex) => `Do task ${taskIndex}`);

describe('Test Mock function', () => {
    beforeEach(async () => {
        axios.get.mockResolvedValue({
            data: [
              {
                  "name": "Thanh Long",
                  "username": "thanhlong"
              },
              {
                  "name": "Thanh Luan",
                  "username": "thanhluan"
              },
              {
                  "name": "Phi Huy",
                  "username": "phihuy"
              },
              {
                  "name": "Quang Kiet",
                  "username": "quangkiet"
                  
              },
              {
                  "name": "Minh Duc",
                  "username": "minhduc"
              }
          ]
        });

        await myTeam.getListMember();
    })
    it('Asign a task for member "Phi Huy" and use Mock function to create a fake function', () => {
        const result = myTeam.assignedTask('Phi Huy', mockTask, 5)
        expect(myTeam.listTask['Phi Huy']).toBeUndefined()
        expect(result).toEqual('Member can not do this task')
    })
})
