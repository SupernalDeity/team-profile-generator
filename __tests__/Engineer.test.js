const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it('should get the name with the getName()', () => {
    const o = new Engineer('Sam', 2, 'samiam@email.com', 'SamIam');
    expect(o.getName()).toEqual('Sam');
  })
  
  it('should get the id with the getId()', () => {
    const o = new Engineer('Sam', 2, 'samiam@email.com', 'SamIam');
    expect(o.getId()).toEqual(2);
  })

  it('should get the email with the getEmail()', () => {
    const o = new Engineer('Sam', 2, 'samiam@email.com', 'SamIam');
    expect(o.getEmail()).toEqual('samiam@email.com');
  })

  it('should return github account with getGithub()', () => {
    const o = new Engineer('Sam', 2, 'samiam@email.com', 'SamIam');
    expect(o.getGithub()).toEqual('SamIam');
  }) 

  it('should return the correct role with getRole()', () => {
    const o = new Engineer('Sam', 2, 'samiam@email.com', 'SamIam');
    expect(o.getRole()).toEqual('Engineer');
  })
});
