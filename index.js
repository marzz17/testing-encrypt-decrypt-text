function encryptText(plainText, key) {
    let cipherText = '';
  
    for (let i = 0; i < plainText.length; i++) {
      cipherText += key[plainText.charCodeAt(i) - 65];
    }
  
    return cipherText;
  }
  
function decryptText(cipherText, key) {
    let plainText = '';
    
    for (let i = 0; i < cipherText.length; i++) {
      const char = cipherText[i];
      const index = key.indexOf(char);
      if (index !== -1) {
        plainText += String.fromCharCode(index + 65);
      } else {
        plainText += char;
      }
    }

    return plainText;
  }
  

const key = '7LwU3Fp4Z6PtyG5bzX5h7PhVQa';
  
const cipherText = 'FZGGh43F5V';
const plainText = decryptText(cipherText, key);
console.log("Your plain text: ", plainText); 

const cipherTextResult = encryptText(plainText, key);
console.log("Your cipher text: ",cipherTextResult);
