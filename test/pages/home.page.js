import { assert } from 'chai';
import Base from './Base';
import sel from '../selectors/home.sel';
import exp from '../expected/home.exp';

class Home extends Base {

    open() {
        this.openBase();
        $(sel.clienttimezone).waitForDisplayed();
    }

    logoFormDisplayed() {
        let loginForm = $$(sel.loginForm)[0].isDisplayed();
        assert.equal(loginForm, true);
    }

    loginFormTitleConnectionDisplayed() {
        let inf1 = $$(sel.infConnections)[0].isDisplayed();
        assert.equal(inf1, true);
    }

    loginFormTitleConnectionText() {
        let inf = $$(sel.infConnections)[0].getText();
        assert.equal(inf, exp.infConnections);
    }

    loginFormTitleWelcomeDisplayed() {
        let wel = $(sel.infoWelcome).isDisplayed();
        assert.equal(wel, true);
    }

    loginFormTitleWelcomeText() {
        let wel1 = $(sel.infoWelcome).getText();
        assert.equal(wel1, exp.infoWelcome);
    }

    loginFormTitleConnectPeopleDisplayed() {
        let conPeople = $(sel.infoConnectPeople).isDisplayed();
        assert.equal(conPeople, true);
    }

    loginFormTitleConnectPeopleText() {
        let conPeople = $(sel.infoConnectPeople).getText(); 
        assert.equal(conPeople, exp.infoConnectPeople);
    }

    loginFormTitleWhatYouMayQualifyForDisplayed() {
        let infQ = $$(sel.infoWhatYouMayQualifyFor)[1].isDisplayed();
        assert.equal(infQ, true);
    }

    loginFormTitleWhatYouMayQualifyForText() {
        let infQ1 = $$(sel.infoWhatYouMayQualifyFor)[1].getText();
        assert.equal(infQ1, exp.infoWhatYouMayQualifyFor);
    }

    loginFormTitleTryScreenerDisplayed() {
        let infQ2 = $$(sel.infoTryScreener)[0].isDisplayed();
        assert.equal(infQ2, true);
    }

    loginFormTitleTryScreenerText() {
        let infQ3 = $$(sel.infoTryScreener)[0].getText();
        assert.equal(infQ3, exp.infoTryScreener);
    }

    loginFormLabelTextForUserDisplayed() {
        let label = $$(sel.labelTextForUser)[0].isDisplayed();
        assert.equal(label, true);
    }

    usernameFieldDisplayed() {
        let userName = $(sel.usernameField).isDisplayed();
        assert.equal(userName, true);
    }

    usernameFieldIconDisplayed() {
        let userName1 = $$(sel.usernameFieldIcon)[0].isDisplayed();
        assert.equal(userName1, true);
    }

    loginFormLabelTextForPassDisplayed() {
        let label = $$(sel.labelTextForPass)[1].isDisplayed();
        assert.equal(label, true);
    }

    passFieldDisplayed() {
        let password = $(sel.passwordField).isDisplayed();
        assert.equal(password, true);
    }
    passFieldIconDisplayed() {
        let password1 = $$(sel.passwordFieldIcon)[1].isDisplayed();
        assert.equal(password1, true);
    }    

    forgotLinkDisplayed() {
        let remindUser = $$(sel.forgotLink)[1].isDisplayed();
        assert.equal(remindUser, true);
    }

    forgotLinkText() {
        let remindUserT = $$(sel.forgotLink)[1].getText();
        assert.equal(remindUserT, exp.forgotLinkText);
    }   

    loginBtnDisplayed() {
        let btnLogin = $(sel.btnLogin).isDisplayed();
        assert.equal(btnLogin, true);
    }

    loginBtnBgColor() {
        let elem = $(sel.btnLogin).getCSSProperty('background-color').parsed.hex;
        assert.equal(elem, exp.loginBtnBgColor);
    }

    loginBtnText() {
        let textHTML = $(sel.btnLogin).getText();
        assert.equal(textHTML, exp.loginBtnText);
    }

    loginBtnTextColor() {
        let elem = $(sel.btnLogin).getCSSProperty('color').parsed.hex;
        assert.equal(elem, exp.loginBtnTextColor);
    }
    

    loginBtnFontSize() {
        let fontSize = $(sel.btnLogin).getCSSProperty('font-size').value;
        assert.equal(fontSize, exp.loginBtnFontSize);
    }

    loginBtnFont() {
        let fontSize = $(sel.btnLogin).getCSSProperty('font-family').value;
        assert.equal(fontSize, exp.loginBtnFont);
    }

    loginFormTitleIfYouNeedDisplayed() {
        let info = $$(sel.infoifYouNeed)[0].isDisplayed();
        assert.equal(info, true);
    }

    loginFormTitleIfYouNeedText() {
        let info1 = $$(sel.infoifYouNeed)[0].getText();
        assert.equal(info1, exp.infoifYouNeed);
    }

    loginFormTitleLearnMoreDisplayed() {
        let info2 = $$(sel.infoLearnMore)[1].isDisplayed();
        assert.equal(info2, true);
    }

    loginFormTitleLearnMoreText() {
        let info3 = $$(sel.infoLearnMore)[1].getText();
        assert.equal(info3, exp.infoLearnMore);
    }

}

export default new Home();