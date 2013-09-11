# Ingression [![Build Status](https://travis-ci.org/akasfei/Ingression.png?branch=master)](https://travis-ci.org/akasfei/Ingression) [![devDependency Status](https://david-dm.org/akasfei/Ingression/dev-status.png)](https://david-dm.org/akasfei/Ingression#info=devDependencies)

> The world around you is not as it seems. It's happening all around you. They aren't coming. They're already here.

Ingression is a jQuery plug-in which plays an animation asking the user to join the Resistance faction.

## Usage

A `.i-activemsg` element is required to activate the animation. You can use the following:

    <a href="#" class="i-activemsg">_!NEWMSG</a> 

You can also add .fixed to make the button fixed on the upper right corner.

Then you can initialize the plugin.

    $('body').ingression('init');

This will put necessary html into your body. Don't worry, this won't affect your layout.

To start the animation,

    $('body').ingression('start');

Voila. Awesome!

For those who have no idea what Ingress is, you should totally [check it out](https://www.ingress.com)!

## JOIN THE RESISTANCE!