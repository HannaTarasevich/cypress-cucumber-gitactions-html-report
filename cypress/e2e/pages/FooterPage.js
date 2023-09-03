class FooterPage {
  elements = {
    twitterIcon: () => cy.get('.social_twitter'),
    facebookIcon: () => cy.get('.social_facebook'),
    linkedinIcon: () => cy.get('.social_linkedin'),
    infoText: () => cy.get('.footer_copy')
  }
}

export const footerPage = new FooterPage()
