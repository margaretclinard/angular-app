angular
  .module('tas')
  .factory('authFactory', authFactory)

function authFactory(BASE_URL) {
  return {
    isLoggedIn: function (){
      var fb = new Firebase(BASE_URL);

      return !!fb.getAuth();
    },

    getAuth: function () {
      var fb = new Firebase(BASE_URL);

      return fb.getAuth();
    },

    login: function (user, cb) {
      var fb = new Firebase(BASE_URL);

      fb.authWithPassword(user, cb);
    },

    logout: function (cb) {
      var fb = new Firebase(BASE_URL);

      fb.unauth(cb);
    },

    register: function (user, cb) {
      var fb = new Firebase(BASE_URL);

      fb.createUser(user, cb);
    },

    forgotPassword: function (user, cb) {
      var fb = new Firebase(BASE_URL);

      fb.resetPassword(user, cb);
    }
  };
}
