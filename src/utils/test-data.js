/* eslint-disable import/prefer-default-export */
const categories = [
  'Food',
  'Bill',
  'Transport',
  'Shopping',
];

const periodView = [
  { label: 'Today', value: 'day', type: 'doughnut' },
  { label: 'This week', value: 'week', type: 'bar' },
  { label: 'This month', value: 'month', type: 'bar' },
  { label: 'This year', value: 'year', type: 'bar' },
];

const initialData = [
  // #region 2020-12-01
  // {
  //   category: 'Food',
  //   date: '2020-12-01',
  //   itemName: 'Birthday Dinner',
  //   price: '2',
  // },
  {
    category: 'Bill',
    date: '2020-12-01',
    itemName: 'Electricity Bill December 2020',
    price: '100',
  },
  // {
  //   category: 'Shopping',
  //   date: '2020-12-01',
  //   itemName: 'Buying furniture',
  //   price: '5',
  // },
  // #endregion 2020-12-01
  // ---------------------------------
  // #region 2021-02-01
  {
    category: 'Food',
    date: '2021-02-01',
    itemName: 'Morning Coffee',
    price: '2',
  },
  // {
  //   category: 'Bill',
  //   date: '2021-02-01',
  //   itemName: 'Rent',
  //   price: '100',
  // },
  // {
  //   category: 'Food',
  //   date: '2021-02-01',
  //   itemName: 'Dinner',
  //   price: '5',
  // },
  // #endregion 2021-02-01
  // ---------------------------------
  // #region 2021-06-04
  {
    category: 'Food',
    date: '2021-06-04',
    itemName: 'Lunch on Friday',
    price: '2',
  },
  {
    category: 'Shopping',
    date: '2021-06-04',
    itemName: 'T shirt',
    price: '20',
  },
  // #endregion 2021-06-04
  // ---------------------------------
  // #region 2021-06-07
  {
    category: 'Food',
    date: '2021-06-07',
    itemName: 'Morning Coffee',
    price: '2',
  },
  // {
  //   category: 'Transport',
  //   date: '2021-06-07',
  //   itemName: 'Car fuel',
  //   price: '15',
  // },
  // {
  //   category: 'Shopping',
  //   date: '2021-06-07',
  //   itemName: 'Groceries',
  //   price: '30',
  // },
  // #endregion 2021-06-07
  // ---------------------------------
  // #region 2021-06-08
  {
    category: 'Food',
    date: '2021-06-08',
    itemName: 'Tuesday lunch',
    price: '2',
  },
  // #endregion 2021-06-08
];

export {
  periodView, categories, initialData,
};
