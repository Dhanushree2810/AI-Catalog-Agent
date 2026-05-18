import handler from './index.js';

export default function loginHandler(req, res) {
  // Forward to consolidated auth handler with action=login
  req.query = { ...req.query, action: 'login' };
  return handler(req, res);
}
