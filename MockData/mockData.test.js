
const listMembers = require('./mockData')
let ListMember = listMembers.ListMember;

const myTeam = new ListMember()
const axios = require('axios'); 
jest.mock('axios');

const mockTask = jest.fn((taskIndex) => `Do task ${taskIndex}`);

describe('Test Mock function', () => {
    it('call getListMember and returns list member of myTeam in case data have 0 elements', async () => {
        axios.get.mockResolvedValue({
          data: []
        });
      
        await myTeam.getListMember();
        const listMemberNames = []
        expect(myTeam.listMember).toEqual(listMemberNames);
    });
    
    it('call getListMember and returns list member of myTeam in case data have 10 elements', async () => {
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
        const listMemberNames = ['Thanh Long','Thanh Luan','Phi Huy','Quang Kiet', 'Minh Duc']
        expect(myTeam.listMember).toEqual(listMemberNames);
    });
})
