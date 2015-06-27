import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('String'),
  username: DS.attr('String'),
  cohort: DS.attr('String')
});
