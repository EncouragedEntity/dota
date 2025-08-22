export default {
  root: {
    stack: 'root/stack',
    initial: 'root/initial',
    error: 'root/error',
  } as const,

  heroes: {
    stack: 'heroes/stack',
    list: 'heroes/list',
    filter: 'heroes/filter',
    details: 'heroes/details',
  } as const,
};