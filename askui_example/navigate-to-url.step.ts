import { defineFeature, loadFeature } from 'jest-cucumber';
import { aui } from './helpers/askui-helper';

const feature = loadFeature('features/NavigateToWebsite.feature');

defineFeature(feature, test => {

  // Maps to 'Scenario' in your feature file
  test('Entering the correct URL into the browser address bar', ({ given, when, then }) => {

    given('I am on the Google search page', async () => {
      await aui.moveMouse(1000, 1000).exec();
      await aui.mouseLeftClick().exec();
      await aui.pressTwoKeys('command', 't').exec();
    });
    
    when('I type in the URL for AskUI practice page', async () => {
      await aui.typeIn('https://askui.github.io/askui-practice-page/').textfield().exec();
      await aui.pressKey('enter').exec();
    });

    then('I will land on the webpage', async () => {
      await aui.expect().text('Welcome to the AskUI Practice Page').exists().exec();
    });

  });
});
