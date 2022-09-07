///  <reference types="cypress" />

describe("Basic features", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("search button disabled under 3 character", () => {
    cy.get("input").should("have.attr", "placeholder", "enter the title");
    cy.get("button").contains("search").should("be.disabled");
    cy.get("input")
      .should("have.attr", "placeholder", "enter the title")
      .type("Idle Hands");
    cy.get("button").contains("search").should("be.enabled");
  });
});

describe("Add To favorite", () => {
  const movieTitle = "V for Vendetta";

  beforeEach(() => {
    cy.visit("localhost:3000");
    cy.get("input").type("Vendetta");
    cy.get("button").click();
  });

  it("Search a movie", () => {
    cy.get(".cardTitle").contains(movieTitle).should("exist");
  });

  it("Add a movie to favorite", () => {

    cy.get(".cardTitle")
      .contains(movieTitle)
      .siblings(".favoriteButton")
      .click();
    cy.get(".favoriteCardWrapper").should("contain", movieTitle);
  });

  it("Cant add one movie twice", () => {
    cy.get(".cardTitle")
      .contains(movieTitle)
      .siblings(".favoriteButton")
      .click();
    cy.get(".cardTitle")
      .contains(movieTitle)
      .siblings(".favoriteButton")
      .click();
    cy.get(".favoriteCardWrapper").should("have.length", 1);
  });

  it("Verify before delete from favorite", () => {
    cy.get(".cardTitle")
      .contains("V for Vendetta")
      .siblings(".favoriteButton")
      .click();
    cy.get(".favoriteCardWrapper")
      .contains(movieTitle)
      .siblings(".deleteFavoriteButton")
      .click();
    cy.get(".favoriteCardWrapper")
      .contains(movieTitle)
      .siblings(".deleteFavoriteButton")
      .should("contain", "Are You Sure?");
    cy.get(".favoriteCardWrapper").should("have.length", 1);
  });

  it("Delete from favorite", () => {
    cy.get(".cardTitle")
      .contains("V for Vendetta")
      .siblings(".favoriteButton")
      .click();
    cy.get(".favoriteCardWrapper")
      .contains(movieTitle)
      .siblings(".deleteFavoriteButton")
      .click();
    cy.get(".favoriteCardWrapper")
      .contains(movieTitle)
      .siblings(".deleteFavoriteButton")
      .should("contain", "Are You Sure?");
    cy.get(".favoriteCardWrapper")
      .contains(movieTitle)
      .siblings(".deleteFavoriteButton")
      .click();
    cy.get(".favoriteCardWrapper").should("have.length", 0);
  });

  it("Add all movie to favorite", () => {
    cy.get(".favoriteButton").each(($el) => {
      cy.wrap($el).click()
    })
    cy.get(".favoriteCardWrapper").should("have.length", 20);
    

  });
});

describe("paginatorTests", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
    cy.get("input").type("blood");
    cy.get("button").click(); 
  });

  it("the paginator buttons visible after query and have 5 button" , ()=> {
    cy.get(".footerContainer").should("exist")
    cy.get(".pageButton").should("have.length" , 5)
  }) 
 
  it("the buttons clickable and it change its add class", ()=> {
    cy.get(".pageButton").eq(2).click().should("have.class" , "selectedButton")
  })

  it("paginator have endmarker and have not  starmarker when page is 2", ()=> {
    cy.get(".pageButton").eq(2).click()
    cy.get("[data-testid='endMarker']").should("exist")
    cy.get("[data-testid='startMarker']").should("not.exist")
  })
  
  it("paginator have startmarker when page is 4", ()=> {
    cy.get(".pageButton").eq(4).click()
    cy.get("[data-testid='startMarker']").should("exist")
  })

  it("paginator show more numbers, when page is more then center", ()=> {
    cy.get(".pageButton").eq(4).click()
    cy.get(".pageButton").should("contain", "7")
  })


});
