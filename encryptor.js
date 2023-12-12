const crypto = require('crypto');
const secureRandom = require('secure-random');

function generateHMAC(message, secretKey) {
    return crypto.createHmac('sha256', secretKey).update(message).digest('hex');
}

function generateSecretKey() {
    const secureRandomNumber = secureRandom(256 / 8);

    return crypto.createHash('sha256', secureRandomNumber).digest('hex');
}

exports.generateSecretKey = generateSecretKey;
exports.generateHMAC = generateHMAC;