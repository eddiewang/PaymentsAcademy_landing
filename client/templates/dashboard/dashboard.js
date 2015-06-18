Template.dashboard.helpers({
	videoList: function() {
		return Videos.find();
	}
});

Template.dashboard.rendered = function() {

};
