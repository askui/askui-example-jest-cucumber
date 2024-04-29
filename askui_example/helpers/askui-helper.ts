import { UiControlClient, UiController } from 'askui';
import { AskUIAllureStepReporter } from '@askui/askui-reporters';
import 'dotenv/config'

// Server for controlling the operating system
let uiController: UiController;

// Client is necessary to use the askui API
let aui: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  uiController = new UiController({
    /**
      * Select the display you want to run your tests on, display 0 is your main display;
      * ignore if you have only one display
      */
    display: 0,
  });

  await uiController.start();

  aui = await UiControlClient.build({
    reporter: new AskUIAllureStepReporter(),
  });

  await aui.connect();
});

beforeEach(async () => {
  await aui.startVideoRecording();
});

afterEach(async () => {
  await aui.stopVideoRecording();
  const video = await aui.readVideoRecording();
  await AskUIAllureStepReporter.attachVideo(video);
});

afterAll(async () => {
  aui.disconnect();

  await uiController.stop();
});

export { aui };
