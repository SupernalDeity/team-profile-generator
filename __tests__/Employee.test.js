const Employee = require("../lib/Employee");

describe("Employee", () => {
  it('should get the name with the getName()', () => {
    const o = new Employee('Anthony', 1, 'google@gmail.com');
    expect(o.getName()).toEqual('Anthony');
  })
  
  it('should get the id with the getId()', () => {
    const o = new Employee('Anthony', 1, 'google@gmail.com');
    expect(o.getId()).toEqual(1);
  })

  it('should get the email with the getEmail()', () => {
    const o = new Employee('Anthony', 1, 'google@gmail.com');
    expect(o.getEmail()).toEqual('google@gmail.com');
  })

  it('should return the correct role with getRole()', () => {
    const o = new Employee('Anthony', 1, 'google@gmail.com');
    expect(o.getRole()).toEqual('Employee');
  })

});
