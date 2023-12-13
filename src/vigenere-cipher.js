const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const extendedKey = key.toUpperCase().repeat(Math.ceil(message.length / key.length));
    let encryptedMessage = '';
    let keyIndex = 0;
    for (let char of message.toUpperCase()) {
      const charIndex = this.alphabet.indexOf(char);

      if (charIndex !== -1) {
        const encryptedChar = this.alphabet[(charIndex + this.alphabet.indexOf(extendedKey[keyIndex++])) % this.alphabet.length];
        encryptedMessage += encryptedChar;
      } else {
        encryptedMessage += char;
      }
    }

    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }
  
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    const extendedKey = key.toUpperCase().repeat(Math.ceil(encryptedMessage.length / key.length));
    let decryptedMessage = '';
    let keyIndex = 0;
    for (let char of encryptedMessage.toUpperCase()) {
      const charIndex = this.alphabet.indexOf(char);

      if (charIndex !== -1) {
        const decryptedChar = this.alphabet[(charIndex + this.alphabet.length - this.alphabet.indexOf(extendedKey[keyIndex++])) % this.alphabet.length];
        decryptedMessage += decryptedChar;
      } else {
        decryptedMessage += char;
      }
    }
    return this.direct ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
