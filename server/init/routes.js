/**
 * Routes for express app
 */
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers } from '../db';

const usersController = controllers && controllers.users;

export default (app) => {
  // user routes
  app.get('/health', (req, res) => res.end('1'));
  if (usersController) {
    // app.post('/sessions', usersController.login);
    // app.post('/users/create', usersController.signUp);
    // app.delete('/sessions', usersController.logout);
    // app.get('/user/passwordReset', usersController.verifyReset);
    // app.post('/users/forgotPass', usersController.forgotPassword);
    // app.post('/resetPassword', usersController.passwordResetCall);
    // app.get('/verify/email', usersController.verifyUserEmail);
    // app.get('/events', usersController.fetchEvents);
    // app.get('/products', usersController.fetchProducts);
    // app.get('/product/:productId', usersController.fetchProductById);
    // app.get('/community', usersController.getCommunityFeed);
    // app.get('/user/children', usersController.getUserChildren);
    // app.get('/user/node', usersController.getNode);
    // app.get('/user/parents', usersController.getParents);
    // app.get('/me', usersController.getCurrentUser);
    // app.get('/oauth', usersController.oauthCallback);
    // app.get('/oauth/begin', usersController.beginOauth);
    // app.post('/me', usersController.editProfile);
    // app.get('/feed', usersController.getFeed);
  } else {
    console.warn(unsupportedMessage('users routes'));
  }
};
