Videos = new Mongo.Collection('videos');

Videos.helpers({

});

Videos.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
