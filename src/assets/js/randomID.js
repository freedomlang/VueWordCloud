function randomFourChar() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function idGenerator() {
  return (
    "_" +
    randomFourChar() +
    randomFourChar() +
    randomFourChar() +
    randomFourChar() +
    randomFourChar() +
    randomFourChar() +
    randomFourChar() +
    randomFourChar()
  );
}

module.exports = idGenerator;
