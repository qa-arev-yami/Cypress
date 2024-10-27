import * as data from "../helpers/default_data_pokemons.json"
 describe('Покупка аватара для своего тренера', function () {

    it('e2e тест на покупку нового аватара', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get(':nth-child(1) > .auth__input').type(data.login);
         cy.get('#password').type(data.password);
         cy.get('.auth__button').click();
         cy.wait(1500);
         cy.get('.header__container > .header__id').click({ force: true });
         cy.get('[href="/shop"]').click();
         cy.get('.available > button').first().click({ force: true });
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4999992222222229');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1025');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('vera yamatina');
         cy.get('.pay-btn').click(); 
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.contains('Покупка прошла успешно').should('be.visible');
     })
 }) 