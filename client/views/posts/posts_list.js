var postsData = [ 
	{
		title: 'Introducing Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope/',
		domain: 'The Universe is my Domain'
	}, 
	{
		title: 'Introducing Meteor',
		author: 'Gary Tse',
		url: 'http://sachagreif.com/introducing-telescope/'
	},
	{
		title: 'Game',
		author: 'Marky',
		url: 'http://sachagreif.com/introducing-telescope/'
	}
];
Template.postsList.helpers({ 
	posts: postsData	
});
