## List of ui plugins

### UI components

1. [Buttons](ui-buttons.md): A container with a group of buttons.
1. [Dialog](ui-dialog.md): A container with a title, content, buttons and background.
1. [Fix-width-sizer](ui-fixwidthsizer.md): Layout children game objects into lines.
1. [Grid-sizer](ui-gridsizer.md): Layout children game objects in grids.
1. [Grid-table](ui-gridtable.md): A container with a [grid table](gridtable.md), slider, and scroller.
1. [Label](ui-label.md): A container with an icon, text, and background.
1. [Menu](ui-menu.md): A container with buttons and sub-menu.
1. [Number-bar](ui-numberbar.md): A container with an icon, slider, text, and background.
1. [Pages](ui-pages.md): A container with pages, only current page is visible.
1. [Scroll-able panel](ui-scrollablepanel.md): A container with a panel, slider, and scroller.
1. [Sizer](ui-sizer.md): Layout children game objects.
1. [Slider](ui-slider.md): A container with a track, indicator, thumb and background.
1. [Tabs](ui-tabs.md): A container with 4 groups of buttons around a center panel.
1. [TextArea](ui-textarea.md): A container with a text, slider, and scroller.
1. [Textbox](ui-textbox.md): A container with an icon, ([typing](texttyping.md) and [paging](textpage.md)) text, and background.

!!! note "Scroll-able table"
    There are 2 kinds of scroll-able tables :

    - [Grid-table](ui-gridtable.md) only creates visible objects. It is suitable for large table.
    - [Grid-sizer](ui-gridsizer.md) adds all objects. Put this grid-sizer into scroll-able panel to have a scroll-able table.

### Basic container

1. [ContainerLite](containerlite.md): Control the position and angle of children game objects.
    ```javascript
    var container = scene.rexUI.add.container(x, y);
    ```
    or
    ```javascript
    class MyContainer extends RexPlugins.UI.Container {
        constructor(scene, x, y, width, height, children) {
            super(scene, x, y, width, height, children);
            // ...
            scene.add.existing(this);
        }
        // ...
    }
    ```

### Shape objects

1. [Round-rectangle](shape-roundrectangle.md): Round rectangle shape.
    ```javascript
    var shape = scene.rexUI.add.roundRectangle(x, y, width, height, radius, fillColor);
    ```
    or
    ```javascript
    class MyRoundRectangle extends RexPlugins.UI.RoundRectangle {
        constructor(x, y, width, height, radius, fillColor, fillAlpha) {
            super(x, y, width, height, radius, fillColor, fillAlpha);
            // ...
            scene.add.existing(this);
        }
        // ...
    }
    ```

### Canvas objects

1. [Chart](ui-chart.md): Draw [chart](https://www.chartjs.org/) on [canvas](canvas.md).

### Colored text objects

1. [BBCode text](bbcodetext.md): Drawing text with [BBCode](https://en.wikipedia.org/wiki/BBCode) protocol.
    ```javascript
    var txt = scene.rexUI.add.BBCodeText(x, y, text, style);
    ```
    or
    ```javascript
    class MyText extends RexPlugins.UI.BBCodeText {
        constructor(scene, x, y, text, style) {
            super(scene, x, y, text, style);
            // ...
            scene.add.existing(this);
        }
        // ...
    }
    ```
1. [Tag text](tagtext.md): Displays text with multi-color, font face, or font size with tags.
    ```javascript
    var txt = scene.rexUI.add.tagText(x, y, text, style);
    ```
    or
    ```javascript
    class MyText extends RexPlugins.UI.TagText {
        constructor(scene, x, y, text, style) {
            super(scene, x, y, text, style);
            // ...
            scene.add.existing(this);
        }
        // ...
    }
    ```

## Demos

- [Dialog](https://codepen.io/rexrainbow/pen/oQjMWE)
    - [Yes/No](https://codepen.io/rexrainbow/pen/MPZWZG)
    - [Choice](https://codepen.io/rexrainbow/pen/ePoRVz)
    - [Pop-up](https://codepen.io/rexrainbow/pen/NEpjmP)
- [Menu](https://codepen.io/rexrainbow/pen/PxOEBr)
- [Text-box](https://codepen.io/rexrainbow/pen/MzGoJv)
- [Text-area](https://codepen.io/rexrainbow/pen/JzBZzy)
- [Number bar](https://codepen.io/rexrainbow/pen/qLZPXr)
- [Grid table](https://codepen.io/rexrainbow/pen/XyJbWX)
- [Tabs](https://codepen.io/rexrainbow/pen/qJeVza)
    - [Tabs-tables](https://codepen.io/rexrainbow/pen/BGKvXK)
- [Scroll-able panel](https://codepen.io/rexrainbow/pen/YMyBom)
- [Pages](https://codepen.io/rexrainbow/pen/vPWzBa)
- [Round-rectangle](https://codepen.io/rexrainbow/pen/ZqqJjG)