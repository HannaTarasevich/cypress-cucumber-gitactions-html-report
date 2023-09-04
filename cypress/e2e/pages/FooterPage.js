class FooterPage {
  elements = {
    facebookIcon: () => cy.get('.social_facebook'),
    infoText: () => cy.get('.footer_copy'),
    linkedinIcon: () => cy.get('.social_linkedin'),
    twitterIcon: () => cy.get('.social_twitter')
  }
}

export const footerPage = new FooterPage()
