# meteor-nojs-banner
Meteor.js package for displaying a floating banner
in case javascript is disabled or not supported in the browser.

The package requires no tweaking, therefore simply running
`meteor add ecosturmer:nojs-banner` within your project
will take care of integration.

It is best to move the name of the package within
`.meteor/packages` after installation to the very top in order to make it set
the correct CSS class name on the root document tag ahead of loading
the rest of your app's .js files.

If you'd like to either alter the message or customize the style of the banner,
the best way to do so would be by overriding the CSS rules that can be seen in
`nojs.css`.

Licensed under Apache 2.0.
