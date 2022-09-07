///  <reference types="cypress" />

describe("Basic features", ()=> {
  beforeEach(()=>{
    cy.visit('localhost:3000')
  })

  it('search button disabled under 3 character', () => {
    cy.get("input").should("have.attr", "placeholder", "enter the title")
    cy.get("button").contains("search").should("be.disabled")
    cy.get("input").should("have.attr", "placeholder", "enter the title").type("Idle Hands")
    cy.get("button").contains("search").should("be.enabled")
    
  })

})


describe('Add To favorite', () => {
  beforeEach(()=>{
    cy.visit('localhost:3000')
    cy.get("input").type("Vendetta")
    cy.get("button").click()
  })

  it("Search a movie", ()=> {
    cy.get('.cardTitle').contains("V for Vendetta").should("exist")
  })

  it("Add a movie to favorite", ()=> {
    cy.get('.cardTitle').contains("V for Vendetta").parent().children(".favoriteButton").click()
    cy.get(".favoriteCardWrapper").should("contain", "V for Vendetta")
  })
  
  it("Cant add one movie twice", ()=> {
    cy.get('.cardTitle').contains("V for Vendetta").parent().children(".favoriteButton").click()
    cy.get('.cardTitle').contains("V for Vendetta").parent().children(".favoriteButton").click()
    cy.get(".favoriteCardWrapper").should('have.length', 1)
  })
  
  it("Verify before delete from favorite", ()=> {
    cy.get('.cardTitle').contains("V for Vendetta").parent().children(".favoriteButton").click()
    cy.get(".favoriteCardWrapper").contains("V for Vendetta").parent().children(".deleteFavoriteButton").click()
    cy.get(".favoriteCardWrapper").contains("V for Vendetta").parent().children(".deleteFavoriteButton").should("contain", "Are You Sure?")
    cy.get(".favoriteCardWrapper").should('have.length', 1)
  })

  it("Delete from favorite", ()=> {
    cy.get('.cardTitle').contains("V for Vendetta").parent().children(".favoriteButton").click()
    cy.get(".favoriteCardWrapper").contains("V for Vendetta").parent().children(".deleteFavoriteButton").click()
    cy.get(".favoriteCardWrapper").contains("V for Vendetta").parent().children(".deleteFavoriteButton").should("contain", "Are You Sure?")
    cy.get(".favoriteCardWrapper").contains("V for Vendetta").parent().children(".deleteFavoriteButton").click()
    cy.get(".favoriteCardWrapper").should('have.length', 0)

  })

})