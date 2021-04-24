const { Tag } = require('../public');

const tagData = [
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'pink',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'pop culture reference',
  },
  {
    tag_name: 'rock music',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;