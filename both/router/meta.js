if(Meteor.isClient) {
  Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].public.meta.title
        title: 'Book Video Club',
        suffix: 'Book'
      }
  });
}
