import Immutable from 'seamless-immutable';
const initialData = Immutable.from([
  {
    id:1,
    name: 'Asset Library',
    date: '21st February 2013',
    url: 'none',
    type: 'folder'
  },
  {
    id:2,
    name: 'Marketing Drive',
    date: '21st February 2013',
    url: 'none',
    type: 'folder'
  },
  {
    id:3,
    name: 'Family Reunion',
    date: '21st February 2013',
    url: 'none',
    type: 'image'
  },
  {
    id:4,
    name: 'Vacation Kalangala',
    date: '21st February 2013',
    url: 'none',
    type: 'image'
  }

  ]);

const documents = (state = initialData, action) => {

  switch (action.type) {
    default:
      return state;
  }
};

export default documents;
