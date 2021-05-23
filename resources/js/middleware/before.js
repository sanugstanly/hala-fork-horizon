import auth from './before/auth';

export default (to, from, next) => {
  auth(to, from, next);
};
