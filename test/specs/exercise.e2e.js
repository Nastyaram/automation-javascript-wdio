import {username, password} from './fixtures.js'

describe('Czechitas Login Page', () => {

    it('should open login page', () => {
        browser.reloadSession();
        browser.url('/prihlaseni')
        
        /*const allButtonInLoginForm = $('.card-body').$$('a');

        for (let i=0; i < allButtonInLoginForm.length; i++) {
            const text = allButtonInLoginForm[i].getText();
            console.log(text);
        }

        allButtonInLoginForm.forEach( element => {
            console.log(element.getText());
        });

        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('button[type="submit"]');

        emailField.setValue('Lenka123@gmail.com');
        passwordField.setValue('Lenka123');
        loginButton.click();*/

        const emailField = $('#email');
        const passwordField = $('#password');
        const button = $('button[type="submit"]');
        const link = $('a[class="btn btn-link"]')
        emailField.setValue('Lenka123@gmail.com');
        passwordField.setValue('Lenka123');
        button.click();

        const prihlaskyLink = $('=Přihlášky');
        prihlaskyLink.click();
        const allRowsInTable = $$('tbody tr');
        allRowsInTable.forEach( element => {
            console.log(element.getText());
        });
        
        
        
            
       


        /*console.log('email field je displayed:' + emailField.isDisplayed())
        console.log('password field je enabled:' + passwordField.isEnabled())
        console.log('email field je displayed:' + emailField.isDisplayed())
        console.log('password field je enabled:' + passwordField.isEnabled())
        console.log('Text tlacitka je:' + button.getText());
        console.log('Odkaz je:' + link.getAttribute('href'));*/
        
        browser.pause(5000);
        
    });
    
});