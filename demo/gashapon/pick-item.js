'use strict'

import GashaponPlugin from './../../plugins/gashapon-plugin.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'demo'
        })
        this.gashapon;
    }

    preload() {}

    create() {
        this.gashapon = new GashaponPlugin(this, {
            mode: 'shuffle', // 0|'shuffle'|1|'random
            items: {
                a: 1,
                b: 2,
                c: 3
            },
            reload: false
        });

        console.log("Pick a: " + this.gashapon.next('a'));

        for (var i = 0; i < 6; i++) {
            console.log("Random pick: " + this.gashapon.next());
        }

        console.log("Pick a: " + this.gashapon.next('a'));
    }

    update() {

    }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Demo
};

var game = new Phaser.Game(config);