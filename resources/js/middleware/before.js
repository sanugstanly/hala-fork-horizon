import auth from './before/auth';
import redirectToFresh from './before/redirectToFresh'

export default (to, from, next) => {
  auth(to, from, next);
  redirectToFresh(to, from, next);
};
