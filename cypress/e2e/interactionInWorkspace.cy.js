describe('template spec', () => {
    beforeEach(() => {
        cy.fixture('interactionInWorkspace').then((data) => {
            cy.wrap(data).as('data')

            cy.viewport(1920, 1080)
            cy.log('Посещение сайта')
            cy.visit(data.main_url)

            cy.log('Нажатие на кнопку авторизации')
            cy.contains('button', 'Авторизация').click()

            cy.log('Ввод данных в форму')
            cy.get('.form-input--text').type(data.employer_login)
            cy.get('.form-input--password').type(data.password)
            cy.get(':nth-child(3) > .button').click()
            cy.wait(1000)

            cy.log('Переход к откликам')
            cy.get(':nth-child(5) > .menu-item__item-name').click()

            cy.log('Переход в рабочее пространство')
            cy.get('button:contains("Рабочее пространство")').eq(1).click()
        })
    })

    it('interaction in workspace', function () {
        cy.log('Ввод сообщения')
        cy.get('.form-area').type(this.data.message)
    })

    it('interaction in workspace negative', function () {
        cy.log('Ввод пустого сообщения')
        cy.get('.form-area').clear()
    })

    afterEach(() => {
        cy.log('Отправка сообщения')
        cy.get('.comment-textarea__buttons > :nth-child(2)').click()
    })
})
