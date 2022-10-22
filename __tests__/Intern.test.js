const Intern = require("../lib/Intern");

describe("Intern", () => {
  it('should get the name with the getName()', () => {
    const o = new Intern('Jazz', 3, 'jazzrules@jazz.com', 'Music Inclined');
    expect(o.getName()).toEqual('Jazz');
  })
  
  it('should get the id with the getId()', () => {
    const o = new Intern('Jazz', 3, 'jazzrules@jazz.com', 'Music Inclined');
    expect(o.getId()).toEqual(3);
  })

  it('should get the email with the getEmail()', () => {
    const o = new Intern('Jazz', 3, 'jazzrules@jazz.com', 'Music Inclined');
    expect(o.getEmail()).toEqual('jazzrules@jazz.com');
  })

  it('should return school with getSchool()', () => {
    const o = new Intern('Jazz', 3, 'jazzrules@jazz.com', 'Music Inclined');
    expect(o.getSchool()).toEqual('Music Inclined');
  }) 

  it('should return the correct role with getRole()', () => {
    const o = new Intern('Jazz', 3, 'jazzrules@jazz.com', 'Music Inclined');
    expect(o.getRole()).toEqual('Intern');
  })
});
