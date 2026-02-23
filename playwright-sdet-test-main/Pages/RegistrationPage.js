export class Registration
{
    constructor(page)
    {
        this.page = page;
    }

    async signUpPage(firstName, lastName, userName, Email, password, passwordConfirmation)
    {
        await this.page.locator('.flex.justify-between>* p').first().click();
        await this.page.locator('.flex.flex-col.items-center.gap-2').waitFor();
        await this.page.getByLabel('input', {name: 'firstName'}).fill(firstName);
        console.log('Entered First Name....')
        await this.page.getByLabel('input', {name:'lastName'}).fill(lastName);
        console.log('Entered Last Name...')
        await this.page.getByLabel('input', {name:'username'}).fill(userName);
        console.log('Entered User Name...')
        await this.page.getByLabel('input', {name:'emailAddress'}).fill(Email);
        console.log('Entered Email Address...')
        await this.page.getByLabel('input', {name:'password'}).fill(password);
        console.log('Entered Password...')
        await this.page.getByLabel('input', {name:'confirmPassword'}).fill(passwordConfirmation);
        console.log('Entered confirmation password');
        await this.page.locator('#mantine-tmodch5ii').check();
        await this.page.locator('#mantine-wujye7ui6').check();
        await this.page.locator("[class*= 'mantine-1s8spa1 flex items']").first().click();
        await this.page.getByText("Welcome to Real!Let's kick off your application.").waitFor();
        console.log('User is successfully registred into site...');
    }
}
