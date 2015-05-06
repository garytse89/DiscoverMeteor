Template.postItem.helpers({
	domain: function() {
		// console.log(this) // 'this' refers to each postItem instance
		var a = document.createElement('a')
		a.href = this.url
		return this.author // originally this.hostname
	}
})
