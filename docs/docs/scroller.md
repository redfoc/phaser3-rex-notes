## Introduction

Drag content. Slow down when dragging released, pull back when out of bounds.

- Author: Rex
- Behavior of game object

## Source code

[Plugin](https://github.com/rexrainbow/phaser3-rex-notes/blob/master/plugins/scroller-plugin.js), [minify](https://github.com/rexrainbow/phaser3-rex-notes/blob/master/plugins/dist/rexscrollerplugin.min.js)

## Usage

[Sample code](https://github.com/rexrainbow/phaser3-rex-notes/tree/master/examples/scroller)

User could import class directly, or install it by global plugin.

### Import class

```javascript
import rexScroller from './plugins/scroller.js';
```

### Install global plugin

Install plugin in [configuration of game](game.md#configuration)

```javascript
import ScrollerPlugin from './plugins/scroller-plugin.js';

var config = {
    // ...
    plugins: {
        global: [{
            key: 'rexScroller',
            plugin: ScrollerPlugin,
            start: true
        },
        // ...
        ]
    }
    // ...
};
var game = new Phaser.Game(config);
```

### Create instance

```javascript
var scroller = scene.plugins.get('rexScroller').add(gameObject, {
    bounds: [
        bottomBound,
        topBound
    ],
    value: topBound,
    // slidingDeceleration: 5000,
    // backDeceleration: 2000,
    // enable: true
});
```

- `bounds` : An array of 2 values [bound0, bound1]
- `value` : Initial value between bound0 and bound1
- `slidingDeceleration` : Deceleration of slow down when dragging released.
- `backDeceleration` : Deceleration of pull back when out of bounds.
- `enable` : Set true to get dragging events.
- `axis` :
    - `'horizontal'`,`'h'`, `'x'`, or `1` : dragging on horizontal/x axis.
    - `'vertical'`,`'v'`, `'y'`, or `2` : dragging on vertical/y axis.

### Set bounds

```javascript
this.setBounds(bounds);  // bounds: [bound0, bound1]
// this.setBounds(bound0, bound1);
```

### Set deceleration

- Deceleration of slow down when dragging released
    ```javascript
    scroller.setSlidingDeceleration(dec);
    ```
- Deceleration of pull back when out of bounds
    ```javascript
    scroller.setBackDeceleration(dec);
    ```

### Get value

```javascript
var value = scroller.value;
```

### Set value

```javascript
scroller.value = newValue;
// scroller.setValue(newValue);
```

Fires `valuechange` event if new value is not equal to current value.

### Events

- Value changed
    ```javascript
    scroller.on('valuechange', function(newValue, prevValue){ /* ... */ });
    ```
    - Set position of content under this event
- Value out of max/min bound
    ```javascript
    scroller.on('overmax', function(newValue, prevValue){ /* ... */ });
    ```
    ```javascript
    scroller.on('overmin', function(newValue, prevValue){ /* ... */ });
    ```

### Drag

#### Drag enable

```javascript
scroller.setEnable();
// scroller.setEnable(false);  // disable
```

#### Is dragging

```javascript
var isDragging = scroller.isDragging;
```

### State machine

```mermaid
graph TB

IDLE["Idle"] --> |Drag| DRAG["Dragging<br>event 'valuechange'"]
DRAG --> |Release| OnRelease{"Under bounds?"}

OnRelease --> |Yes| SLIDE["Sliding<br>Sliding-deceleration"]
SLIDE --> |Stop| IDLE
SLIDE --> |Drag| DRAG

OnRelease --> |No| BACK["Pull back to bounds<br>Back-deceleration"]
BACK --> |Stop| IDLE
BACK --> |Drag| DRAG
```