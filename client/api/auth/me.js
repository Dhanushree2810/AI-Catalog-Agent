import handler from './index.js';

export default function meHandler(req, res) {
  // Forward to consolidated auth handler with action=me
  req.query = { ...req.query, action: 'me' };
  return handler(req, res);
}
