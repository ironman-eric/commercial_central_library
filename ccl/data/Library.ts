import {Book} from './Book';

export function listBooks(): Book[] {
  const books = [
    {
      title: 'Endurance',
    },
    {
      title: 'Purple Reign',
    },
    {
      title: 'Socrates',
    },
  ];

  return books;
}
