const crypto = require('node:crypto');

const name = process.env.NAME ?? 'anonymous';

module.exports = {id: crypto.randomUUID(), name};
