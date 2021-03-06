import sel from '../selectors/footer.page.sel';
import exp from '../expected/footer.exp';
import { assert } from 'chai';
import Base from './Base';


class Footer extends Base {

    footerDisplayed() {
        $(sel.footer).waitForDisplayed();
    }

    firstLine() {
        let first = $(sel.footerContactLine).isDisplayed();
        assert.equal(first, true);
    }

    secondLine() {
        let second = $(sel.footerSecondLine).isDisplayed();
        assert.equal(second, true);
    }

    footerColomsFirst() {
        let col1 = $(sel.colomsFirst).isDisplayed();
        assert.equal(col1, true);
    }

    footerColomsText1() {
        let col1 = $(sel.colomsFirst).getText();
        assert.equal(col1, exp.colon1);
    }

    coloms1Link1Displayed() {
        let link = $(sel.colomsFirstLink1).isDisplayed();
        assert.equal(link, true);
    }

    coloms1Link1Text() {
        let link1 = $(sel.colomsFirstLink1).getText();
        assert.equal(link1, exp.colon1Link1);
    }

    coloms1Link2Displayed() {
        let link2 = $$(sel.colomsFirstLink2)[0].isDisplayed();
        assert.equal(link2, true);
    }

    coloms1Link2Text() {
        let link22 = $$(sel.colomsFirstLink2)[1].getText();
        assert.equal(link22, exp.colon1Link2);
    }

    footerColomsSecond() {
        let col2 = $(sel.colomsSecond).isDisplayed();
        assert.equal(col2, true);
    }

    footerColomText2() {
        let col2 = $(sel.colomsSecond).getText();
        assert.equal(col2, exp.colon2);
    }

    coloms2PhoneDisplayed() {
        let phone = $(sel.colom2str1).isDisplayed();
        console.log(phone)
        assert.equal(phone, true);
    }

    coloms2PhoneText() {
        let phone1 = $(sel.colom2str1).getText();
        assert.equal(phone1, exp.phoneSuport);
    }

    coloms2EmailDisplayed() {
        let email = $(sel.colom2str2).isDisplayed();
        assert.equal(email, true);
    }

    coloms2EmailText() {
        let email1 = $$(sel.colom2str2)[0].getText();
        assert.equal(email1, exp.mailSuport);
    }

    coloms2FaxDisplayed() {
        let fax = $(sel.colom2str3).isDisplayed();
        assert.equal(fax, true);
    }

    coloms2FaxText() {
        let fax1 = $(sel.colom2str3).getText();
        assert.equal(fax1, exp.faxSuport);
    }

    footerColomsThird() {
        let col3 = $(sel.colomsThird).isDisplayed();
        assert.equal(col3, true);
    }

    footerColomstext3() {
        let col3 = $(sel.colomsThird).getText();
        assert.equal(col3, exp.colon3);
    }

    facebookIconDisplayed() {
        let fb = $(sel.facebookIcon).isDisplayed();
        assert.equal(fb, true);
    }

    twitterIconDisplayed() {
        let tw = $(sel.twitterIcon).isDisplayed();
        assert.equal(tw, true);
    }

    linkedinIconDisplayed() {
        let ld = $(sel.linkedinIcon).isDisplayed();
        assert.equal(ld, true);
    }

    allumaIconDisplayed() {
        let alluma = $(sel.allumaIcon).isDisplayed();
        assert.equal(alluma, true);
    }

    appVersionDisplayed() {
        let app = $$(sel.appVersion)[0].isDisplayed();
        assert.equal(app, true);
    }

    appVersionText() {
        let appT = $$(sel.appVersion)[0].getText();
        assert.equal(appT, exp.appVersion);
    }

    allumaLinkInAppVersionDisplayed() {
        let appL = $(sel.allumaLincInAppVersion).isDisplayed();
        assert.equal(appL, true);
    }

    allumaLinkInAppVersionText() {
        let appL1 = $(sel.allumaLincInAppVersion).getText();
        assert.equal(appL1, exp.allumaLinkAppVertionText);
    }

    privacyPolicyDisplayed() {
        let pol = $$(sel.privacyPolicy)[2].isDisplayed();
        assert.equal(pol, true);
    }

    privacyPolicyText() {
        let pol1 = $$(sel.privacyPolicy)[2].getText();
        assert.equal(pol1, exp.privacyPolicyText);
    }

    nonDiscriminationPolicyDisplayed() {
        let pol2 = $$(sel.nonDiscriminationPolicy)[4].isDisplayed();
        assert.equal(pol2, true);
    }

    nonDiscriminationPolicyText() {
        let pol3 = $$(sel.nonDiscriminationPolicy)[4].getText();
        assert.equal(pol3, exp.nonDiscriminationPolicyText);
    }

    termsOfUseDisplayed() {
        let term = $$(sel.termsOfUse)[6].isDisplayed();
        assert.equal(term, true);
    }

    termsOfUseText() {
        let term1 = $$(sel.termsOfUse)[6].getText();
        assert.equal(term1, exp.termsOfUseText);
    }

    siteLink1IsClickable() {
        $(sel.colomsFirstLink1).waitForDisplayed();
        let link1 = $(sel.colomsFirstLink1).isClickable();
        assert.equal(link1, true);
    }

    siteLink2IsClickable() {
        $(sel.colomsFirstLink2).waitForDisplayed();
        let link2 = $(sel.colomsFirstLink2).isClickable();
        assert.equal(link2, true);
    }

    emailAddressIsClickable() {
        $(sel.colom2str2).waitForDisplayed();
        let mail = $$(sel.colom2str2)[0].isClickable();
        assert.equal(mail, true);
    }
    emailAddressRedirect() {
        this.openBase();
        $(sel.colom2str2).click();
        assert.equal(browser.getUrl(), exp.emailAddressRedirect);
        this.openBase();
    }

    facebookIconIsClickable() {
        $(sel.facebookIcon).waitForDisplayed();
        let fbicon = $(sel.facebookIcon).isClickable();
        assert.equal(fbicon, true);
    }

    facebookIconRedirect() {
        $(sel.facebookIcon).click();
        assert.equal(browser.getUrl(), exp.faceboolRedirect);
        this.openBase();
    }

    twitterIconIsClickable() {
        $(sel.twitterIcon).waitForDisplayed();
        let twicon = $(sel.twitterIcon).isClickable();
        assert.equal(twicon, true);
    }

    twitterIconRedirect() {
        $(sel.twitterIcon).click();
        assert.equal(browser.getUrl(), exp.twitterRedirect);
        this.openBase();
    }

    linkedinIconIsClickable() {
        $(sel.linkedinIcon).waitForDisplayed();
        let inicon = $(sel.linkedinIcon).isClickable();
        assert.equal(inicon, true);
    }

    linkedinIconRedirect() {
        $(sel.linkedinIcon).click();
        assert.equal(browser.getUrl(), exp.limkedineRedirect);
    }

    allumaIconIsClickable() {
        this.openBase();
        $(sel.allumaIcon).waitForDisplayed();
        let alluma = $(sel.allumaIcon).isClickable();
        assert.equal(alluma, true);
    }

    allumaIconRedirect() {
        $(sel.allumaIcon).click();
        assert.equal(browser.getUrl(), exp.allumaRedirect);
        this.openBase();
    }

    appVersionClickable() {
        $$(sel.appVersion)[0].waitForDisplayed();
        let appCl = $$(sel.appVersion)[0].isClickable();
        assert.equal(appCl, true);
    }

    allumaLinkInAppVersionClickable() {
        $(sel.allumaLincInAppVersion).waitForDisplayed();
        let appL2 = $(sel.allumaLincInAppVersion).isClickable();
        assert.equal(appL2, true);
    }

    allumaLinkInAppVersionRedirect() {
        $(sel.allumaLincInAppVersion).click();
        assert.equal(browser.getUrl(), exp.allumaRedirect);
        this.openBase();
    }

    privacyPolicyClickable() {
        $$(sel.privacyPolicy)[2].waitForDisplayed();
        let pol4 = $$(sel.privacyPolicy)[2].isClickable();
        assert.equal(pol4, true);
    }

    nonDiscriminationPolicyClickable() {
        $$(sel.nonDiscriminationPolicy)[4].waitForDisplayed();
        let pol5 = $$(sel.nonDiscriminationPolicy)[4].isClickable();
        assert.equal(pol5, true);
    }

    termsOfUseClickable() {
        $$(sel.termsOfUse)[6].waitForDisplayed();
        let term2 = $$(sel.termsOfUse)[6].isClickable();
        assert.equal(term2, true);
    }
}
export default new Footer(); 