import Form from '../pageObjects/form.page.js';

describe('Demo QA', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form');
    });
    context('Main test', () => {
        it('should fill all the fields', () => {
            Form.firstName.type('Ričards');
            Form.lastName.type('Reinsons');
            Form.email.type('example@email.com');
            Form.genderMale.click();
            Form.number.type('1234567890');
            Form.dateOfBirth.click();
            Form.month.select('February');
            Form.year.select('1930');
            Form.dayFeb28.click();
            Form.subjects.type('Economics{enter}');
            Form.hobbiesMusic.click();
            Form.uploadPicture.selectFile('cypress/files/image.jpg');
            Form.address.type('Valmiera, Latvia, LV-4201');
            Form.state.click().type('NCR{enter}');
            Form.city.click().type('Delhi{enter}');
            Form.submit.click();
            Form.formSucessLabel.should('have.text', 'Thanks for submitting the form');
            const correctText = ['Ričards Reinsons', 'example@email.com', 'Male', '1234567890', '28 February,1930', 'Economics', 'Music', 'image.jpg', 'Valmiera, Latvia, LV-4201', 'NCR Delhi'];
            Form.resultTableRows.each(($el, index) => {
                cy.wrap($el).should('contain.text', correctText[index]);
            });
        });
    });
});