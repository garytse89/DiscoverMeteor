# DiscoverMeteor
Playing with the sample project taught in the book Discover Meteor

The gist:

- Organize a Meteor project into client, server, and public folders
- CSS goes inside client/stylesheets and are minified
- Files are automatically located and loaded for you - this is a nice Meteor perk
- Handlebars template is used here in HTML, where the main syntax is {{#each}}..{{/each}}, {{#if}} etc.
- Template.myTemplate.helpers({}) (where myTemplate is the name of your template, such as postList) lets you define sample data and functions to use, the equivalent of an Angular scope function or model.
- collections are the model/data that are synced between the client and the server. You declare them globally without the var keyword, such as Posts = new Meteor.Collection('posts'), then you can immediately access them using `meteor mongo` in the command line, Posts.find().fetch() in the Chrome browser, or return Posts.find() in the template helper
- to make this 'syncing' manual, type `meteor remove autopublish` in the terminal, then link the server and client together through the publish function


