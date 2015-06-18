Meteor.startup(function() {
	Factory.define('video', Videos, {
		bookTitle: function() {
			return Fake.word();
		},
		bookDesc: function() {
			return Fake.paragraph([4]);
		},
		bookCover: function() {
			return Fake.fromArray(['images/cover-test.jpg', 'images/cover_1.jpg', 'images/cover_2.jpg', 'images/cover_3.jpg']);
		}
	});

	//remove everything before we seed
	Videos.remove({});

	if (Videos.find({}).count() === 0) {
		_(15).times(function(n) {
			Factory.create('video');
		});
	}
});