# Ingression [![Build Status](https://travis-ci.org/akasfei/Ingression.png?branch=master)](https://travis-ci.org/akasfei/Ingression) [![devDependency Status](https://david-dm.org/akasfei/Ingression/dev-status.png)](https://david-dm.org/akasfei/Ingression#info=devDependencies)

> The world around you is not as it seems. It's happening all around you. They aren't coming. They're already here.

Ingression is a jQuery plug-in which plays an animation asking the user to join the Resistance faction.

## Usage

First things first, include css file and js file in your page.

A `.i-activemsg` element is required to activate the animation. You can use the following:

```html
<a href="#" class="i-activemsg">_!NEWMSG</a> 
```

You can also add .fixed to make the button fixed on the upper right corner.

Then you can initialize the plugin.

```js
$('body').ingression('init');
```

This will put necessary html into your body. Don't worry, this won't affect your layout.

To start the animation,

```js
$('body').ingression('start');
```

Voila. Awesome!

## Compile js and css with grunt

requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install
grunt
```

Dont't forget to `npm install -g grunt-cli` if you havn't done so!

## JOIN THE RESISTANCE!

For those who have no idea what Ingress is, you should totally [check it out](https://www.ingress.com)!