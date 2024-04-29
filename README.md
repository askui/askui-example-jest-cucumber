# askui-example-jest-cucumber

Example of using AskUI together with [jest-cucumber](https://www.npmjs.com/package/jest-cucumber).

## Installation

```bash
npm install
```

## Configure

Set the following environment variables to configure the example. The `ASKUI_WORKSPACE_ID` and `ASKUI_TOKEN` are required to connect to the askui services. Read at our docs on how to get them: [Windows](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started#step-4-connect-your-askui-account) [Linux](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started-linux#access-token), [macOS](https://docs.askui.com/docs/general/Getting%20Started/Installing%20AskUI/getting-started-macos#access-token).

1. Copy the `.env.template` to `.env` and insert the value for `ASKUI_WORKSPACE_ID` and `ASKUI_TOKEN` e.g.

`.env`-example
```bash
ASKUI_WORKSPACE_ID=<your_workspace_id>
ASKUI_TOKEN=<your_workspace_token>
```

## Execute Workflow

```bash
npm run askui
```
