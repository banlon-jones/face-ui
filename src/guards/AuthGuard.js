const authenticated = (to, from, next) => {
  if ('token' === 'token') {
    next();
  }
  next.redirect('/login');
};

export default authenticated;
