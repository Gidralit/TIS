describe('template spec', () => {
    it('confirm response', () => {
        cy.fixture('createNewVacancy').then(data => {
            cy.viewport(1920, 1080)
            cy.log('Посещение сайта')
            cy.visit(data.main_url)

            cy.log('Нажатие на кнопку авторизации')
            cy.contains('button', 'Авторизация').click()

            cy.log('Ввод данных в форму')
            cy.get('.form-input--text')
                .type(data.employer_login)
            cy.get('.form-input--password')
                .type(data.password)
            cy.get(':nth-child(3) > .button').click()
            cy.wait(1000)

            cy.log('Переход к откликам')
            cy.get(':nth-child(5) > .menu-item__item-name').click()

            cy.log('Подтверждение заявки')
            cy.get('.responses-list-item__actions > :nth-child(1)').first().click()
            })
    })
})