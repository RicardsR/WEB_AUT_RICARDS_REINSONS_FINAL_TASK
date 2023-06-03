class Form {
    static get firstName() {
        return cy.get('#firstName');
    }

    static get lastName() {
        return cy.get('#lastName');
    }

    static get email() {
        return cy.get('#userEmail');
    }

    static get genderMale() {
        return cy.get('label[for*="gender-radio-1"]');
    }

    static get number() {
        return cy.get('#userNumber');
    }

    static get dateOfBirth() {
        return cy.get('#dateOfBirthInput');
    }

    static get month() {
        return cy.get('.react-datepicker__month-select');
    }

    static get year() {
        return cy.get('.react-datepicker__year-select');
    }

    static get dayFeb28() {
        return cy.get('div[aria-label="Choose Friday, February 28th, 1930"]');
    }

    static get subjects() {
        return cy.get('#subjectsContainer');
    }

    static get hobbiesMusic() {
        return cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)');
    }

    static get uploadPicture() {
        return cy.get('#uploadPicture');
    }

    static get address() {
        return cy.get('#currentAddress');
    }

    static get state() {
        return cy.get('#stateCity-wrapper > :nth-child(2)');
    }

    static get city() {
        return cy.get('#stateCity-wrapper > :nth-child(3)');
    }

    static get submit() {
        return cy.get('#submit');
    }

    static get formSucessLabel() {
        return cy.get('#example-modal-sizes-title-lg');
    }

    static get resultTableRows() {
        return cy.get('.table-dark > tbody > tr');
    }
}

export default Form;