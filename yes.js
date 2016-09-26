'use strict';

var goodClassName = Meteor.settings.public.noJSBannerClassName || "has-js";

var rootNode = document.children[0];
rootNode.className += (rootNode.className ? " " : "") + goodClassName;
