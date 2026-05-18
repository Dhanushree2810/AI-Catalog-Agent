import handler from './index.js';

export default function signupHandler(req, res) {
  // Forward to consolidated auth handler with action=signup
  req.query = { ...req.query, action: 'signup' };
  return handler(req, res);
}
