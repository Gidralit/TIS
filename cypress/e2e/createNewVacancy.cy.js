describe('template spec', () => {
    const selectors = {
        loginForm: {
            loginInput: '.form-input--text',
            passwordInput: '.form-input--password',
            submitButton: ':nth-child(3) > .button',
        },

        profile: {
            vacancyButton: ':nth-child(6) > .menu-item__item-name',
        },

        vacancy: {
            createVacancyButton: '.needs-block__filters-wrapper > .button',
            vacancyLabelInput: '.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text',
            vacancyDutiesInput: '.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area',
            vacancyRequirementsInput: '.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area',
        }
    }

    beforeEach(() => {
        cy.fixture('createNewVacancy').then((data) => {
            cy.wrap(data).as('data')

            cy.viewport(1920, 1080)
            cy.log('Посещение сайта')
            cy.visit(data.main_url)

            cy.log('Нажатие на кнопку авторизации')
            cy.contains('button', 'Авторизация').click()

            cy.log('Ввод данных в форму')
            cy.get(selectors.loginForm.loginInput).type(data.employer_login)
            cy.get(selectors.loginForm.passwordInput).type(data.password)
            cy.get(selectors.loginForm.submitButton).click()
            cy.wait(1000)

            cy.log('Переход к потребностям')
            cy.get(selectors.profile.vacancyButton).click()

            cy.log('Переход к созданию потребности')
            cy.get(selectors.vacancy.createVacancyButton).click()
        })
    })

    it('create new vacancy positive', function () {
        cy.get('@data').then((data) => {
            cy.log('Ввод данных для создания потребности')
            cy.get(selectors.vacancy.vacancyLabelInput)
                .type(data.title)
            cy.get(selectors.vacancy.vacancyDutiesInput)
                .type(data.duties)
            cy.get(selectors.vacancy.vacancyRequirementsInput)
                .type(data.requirements)
        })
    })

    it('create new vacancy negative', function () {
        cy.get('@data').then((data) => {
            cy.log('Ввод некорректных данных для создания потребности')
            cy.get(selectors.vacancy.vacancyLabelInput)
                .clear()
            cy.get(selectors.vacancy.vacancyDutiesInput)
                .type(data.duties_negative)
            cy.get(selectors.vacancy.vacancyRequirementsInput)
                .type(data.requirements_negative)
        })
    })

    afterEach(() => {
        cy.log('Создание потребности')
        cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button').click()
    })
})
