import{test, expect} from '@playwright/test'
import { Registration } from '../Pages/RegistrationPage';

test('Real Site Registration Form', async({page}) =>
{
    //-------------- Navigate to URL ----------------
    await page.goto('https://bolt.playrealbrokerage.com', {waitUntil : 'domcontentloaded'});

    //-------------- Sign Up Into Application  -------
    const register = new Registration(page);
    await register.signUpPage('Naseer', 'Noor', 'NaseerNoor', 'naseertest123@gmail.com', 'Nasir@2998', 'Nasir@2998');
    console.log('Registration Flow is Completed..');

})