/* our sample data to mock api return */
const large = [
  {
    id: 'dfb81a48-ca1b-11eb-b8bc-0242ac130003',
    url: '',
    isFavorite: false,
    description: 'a sample gist number one',
    files: [
      'one.js',
      'two.js',
      'three.js',
    ],
    createDate: new Date('04 Dec 2021 00:12:00 GMT'),
  },
  {
    id: '04dcc09e-ca1c-11eb-b8bc-0242ac130003',
    url: 'sample-url-2',
    isFavorite: true,
    description: 'a sample gist number two',
    files: [
      'four.rb',
      'five.css',
      'six.rb',
      'seven.erb',
    ],
    createDate: new Date('21 Dec 2020 00:12:00 GMT'),
  },
]

/*
 * a rather silly way to show that our actual api would not overhydrate
 * data returned by findAllByUser
 */
const small = large.map((gist) => {
  const { id, isFavorite, description, createDate } = gist;

  return { id, isFavorite, description, createDate };
});

const sampleGists = { small, large };

export default sampleGists;

