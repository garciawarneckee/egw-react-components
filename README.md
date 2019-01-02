# EGW Custom React Components Library

## Purpose
There is not much to say... this is a library that I built to reuse my custom components
in my projects, and I humbly share with you. 
This is not a complete library with a lot of components, and I think that it will never be completed. 
I will updates components as I need to use it, or I have and new idea of component to reuse.

## Philosophy
I will develop this library following the Atomic Desing philosophy. [atomic-design-web](http://bradfrost.com/blog/post/atomic-web-design/)

## Development notes
If you checkout this project at first time, after doing `npm install` you have to do `npm build:dev`, this will set up the proper files ready to be working in a local enviroment. (By now this script just generate a local .css file in the same folder of the component that will be not pushed).

## Install it
  `npm i egw-react-components`
  
## How to view the components 
  To get a view of the component's behavior execute:
  `npm run storybook`
  
  This will run an app called [storybook](https://storybook.js.org/) that opens a new browser tab that displays different cases of each components that lets you intereact with them. 
  
## How to use the components in your projects

## Components Description

`import { NameOfComponent } from 'egw-react-components'`

### Atoms

#### DraggableButton
Renders a button that allow you to drag and drop in the browser window limited to the body tag.

##### Props 
  - **iconName** - The name of the icon in [free-font-awesome-icons](https://fontawesome.com/icons?d=gallery&m=free)
  - **text** - Text to display in the button.

  *Either both or one of them needs to be present in order to render the button correctly. 
  If both are present the icon will be displayed and then the text in line.*

  - **initialPosition** -  An object that represents the initial position of the button. {x: number, y: number }
  - **style** - Custom css-based style object. 
  - **onStart** - Function it is executed when the object is started to be dragged. 
  - **onDrag** - Function it is executed every time the object is being dragged.
  - **onStop** - Fucntion it is executed when the object is dropped.

#### RoundedImage
Renders an image which is rounded. With three differents sizes: small, medium and large.

##### Props 
  - **src** - The URL of the image you want to display. 
  - **size** - The size of the image.
  - **style** - Custom css-based style object. 
  
#### ToggleSwitch
Renders a styled checkbox simil to ios switch. It is useful to represent when something is activated or not.

##### Props 
  - **enabled** - Initial state of the component. 
  - **theme** - Builtin styles. If this prop is not passed "default" theme is applied which is like ios switch toggle.
  - **onClick** - Function to apply when the toggle is clicked.
  - **onStateChanged** - Function to apply when the 'enabled' prop is changed.

#### IconProvider
Wraps the FontAwesomeIcon component, in order to import the icon labrary only one time and reuse it anywhere.

##### Props 
  - **iconName** - The name of the icon to render.


### Molecules

#### TextAndSubmit
Renders a text input and a button in a line that let the user to submit and make something with the entered text.

##### Props 
  - **isVisible** - Points if the component is visible or not. 
  - **placeholder** - Fake text indicates the purpose of the text content. 
  - **submitText** - Text goes in the submit button.
  - **theme** - Predefined theme available to apply. (default or danger by now).
  - **inputStyle** - Custom input style.
  - **btnStyle** - Custom button style.
  - **onSubmit** - Custom function to apply on submit event.
   
# Third party libraries 
I used this libraries to create the components:

- [react-draggable](https://github.com/mzabriskie/react-draggable)
- [fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome)
- [storybook](https://storybook.js.org/)

## Licence ISC
