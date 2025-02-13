describe('template spec', () => {
    it('view vacancy page', () => {
        cy.fixture('viewVacancyPage').then(data => {
            cy.log('Посещение сайта')
            cy.visit(data.main_url)

            cy.log('Переход к потребностям')
            cy.get(':nth-child(1) > .header__nav > [href="/needs"] > .header__label').click()

            cy.log('Заполнение формы фильтра')
            cy.get('.form-input--text')
                .type(data.search_text)
            cy.get('input[name="salary-field-radio"]').check('Любой')
            cy.get('.form-select__selected').click()
            cy.get('.form-select__option:nth-child(2)').click()
        })
    })
})