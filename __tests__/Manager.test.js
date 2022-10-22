const Manager = require("../lib/Manager");

describe("Intern", () => {
  it('should get the name with the getName()', () => {
    const o = new Manager('Kyle', 4, 'truekyle@kyle.com', 220);
    expect(o.getName()).toEqual('Kyle');
  })
  
  it('should get the id with the getId()', () => {
    const o = new Manager('Kyle', 4, 'truekyle@kyle.com', 220);
    expect(o.getId()).toEqual(4);
  })

  it('should get the email with the getEmail()', () => {
    const o = new Manager('Kyle', 4, 'truekyle@kyle.com', 220);
    expect(o.getEmail()).toEqual('truekyle@kyle.com');
  })

  it('should return office number with getOfficeNumber()', () => {
    const o = new Manager('Kyle', 4, 'truekyle@kyle.com', 220);
    expect(o.getOfficeNumber()).toEqual(220);
  }) 

  it('should return the correct role with getRole()', () => {
    const o = new Manager('Kyle', 4, 'truekyle@kyle.com', 220);
    expect(o.getRole()).toEqual('Manager');
  })
});
