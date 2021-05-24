Custom modal for Wealth Health company.

# Installation

You can install wh-modal with [npm](https://www.npmjs.com/)

`npm install wh-modal`

# Import

You need to import component
```JSX
import { WhModal } from 'wh-modal'
```

# Opening

The modal is invisible by default.
To display the modal you must pass the value `true` to the argument `isModal={'true'}`

```JSX
import { WhModal } from 'wh-modal'

function MyComponent() {
    return (
        <>
        <WhModal isModal={'true'} />
        </>
    )
}
```

# Closing

To hide the modal you must pass the value `false` to the argument `isModal={'false'}` or click on the 'close' button directly on the modal.

# Options

To modify the content of modal you must use the argument `content={}`.
To change the appearance of the modal you must pass an object to the argument `modalStyle={}`

example :

```JSX
import { WhModal } from 'wh-modal'

function MyComponent() {
    return (
        <>
        <WhModal content={myContent} modalStyle={{backgroundColor: "red", justifyContent: "left"}} />
        </>
    )
}
```

list of available style arguments :

```CSS
backgroundColor,
fontSize,
justifyContent,
width,
height,
color,
boderStyle,
borderWidth,
borderColor,
borderRadius,
```

# Bugs & Feature Requests

If you encounter bugs, please create an [issue](https://github.com/Poccardl/wh-modal/issues).