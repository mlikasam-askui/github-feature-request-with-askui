# Github Feature Request With askui for askui

In this project, I used [askui nodjs lib](https://www.askui.com/) to automate the creation of a feature request for itself.
This project shows, that askui can be used to automate almost any task, it's only a question of what YOU want to automate.

## Requirement

To reproduce this project's results, you have to make sure that a browser window is open and you have already logged in to your Github account.

### Notes

it's recommended to have two screens, one has your IDE and the other has the browser window ([you can select your screen here](test/helper/jest.setup.ts)).

## Usage

After cloning this project, you can start first by installing the packages by running the command:

```shell
npm install
```

then you can start the test with the command:

```shell
npm run github:feature:request
```

after running your command you will see that your mouse is being moved by magic (aka askui) :tada:

## Tips

Usually, when I write test steps with askui, I use the [askui screen annotation tool](https://docs.askui.com/docs/general/Tooling/annotate-image), to check how the AI model detects my screen.\
You can test how askui AI model annotates your screen by running:

```shell
npm run askui:annotate
```

An HTML file will be generated after this command. you can simply copy the file path and paste it inside your browser and check the results.\
if you want to annotate another screen then your default, you can simply change the display number in [jest.setup file](test/helper/jest.setup.ts)\
After your screen was annotated and you opened your HTML file you will see a similar result to [this](https://docs.askui.com/docs/general/Best%20Practice/selecting_ui_elements#4-selecting-undetected-elements).

Inside this HTML report, you will find boxes over the elements, you can click on one box, and the element code will be automatically copied to your clipboard. with ctrl+v you can paste it and have the right code for that element. e.g when you click on [Humanizing UI Automation](https://docs.askui.com/docs/general/Best%20Practice/selecting_ui_elements/#4-selecting-undetected-elements) this code will be copied to your clipboard `.text().withText("Humanizing UI Automation.")`

## Video

the video will be uploaded soon.
