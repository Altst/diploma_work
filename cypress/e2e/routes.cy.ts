describe("home page", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get(".inline-flex").click();
  });
});

describe("sign-in page", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/sign-in");
  });
});

describe('select organization page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/select-org')
  })
})

describe('organization page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/organization/[org-id]')
  })
})

describe('board page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/board/[board-id]')
  })
})

describe('activity page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/organization/[org-id]/activity')
  })
})

describe('settings page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/organization/[org-id]/settings')
  })
})
