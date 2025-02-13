describe('template spec', () => {
  it('response the vacancy', () => {
    cy.fixture('responseVacancy').then(data => {
      cy.log('Посещение сайта')
      cy.visit(data.main_url)

      cy.log('Нажатие на кнопку авторизации')
      cy.contains('button', 'Авторизация').click()

      cy.log('Ввод данных в форму')
      cy.get('.form-input--text')
          .type(data.student_login)
      cy.get('.form-input--password')
          .type(data.password)
      cy.get(':nth-child(3) > .button').click()
      cy.wait(1000)

      cy.log('Переход к потребностям')
      cy.get(':nth-child(1) > .header__nav > [href="/needs"] > .header__label').click()

      cy.log('Переход в потребность')
      cy.get(':nth-child(1) > .need-item__info-wrapper > .need-item__footer-wrapper > .need-footer > .need-footer__button-wrapper > .button').click()

      cy.log('Отклик на потребность')
      cy.contains('button', 'Откликнуться').click()
    })
  })
})