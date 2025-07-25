console.log("Chat profile Image Logic");

const messages = [
  { id: 1, senderId: "user1", content: "Hi there!" },
  { id: 2, senderId: "user1", content: "How are you?" },
  { id: 3, senderId: "user2", content: "Hey! I’m good." },
  { id: 4, senderId: "user2", content: "You?" },
  { id: 5, senderId: "user1", content: "Doing well!" },
  { id: 6, senderId: "user1", content: "Doing impeccable!" },
];

console.log(messages);
console.log("Trying to access non existing message: ", messages[6]); //Undefined
console.log(!messages[6]); // non existing flag - true

/* 
We'll iterate through the messages and add the showProfileImage flag 
depending on whether 
the next message is from a different user or undefined (i.e. last one).
*/

function processMessages(message) {
  return messages.map((msg, index) => {
    const nextMsg = messages[index + 1];
    const isLastInBlock = !nextMsg || nextMsg.senderId !== msg.senderId;

    return {
      ...msg,
      showProfileImage: isLastInBlock,
    };
  });
}

const processedMessage = processMessages(messages);

console.log("Processed Message with showProfileImage flag: ", processedMessage);
processedMessage.forEach((msg) => {
  console.log(`[${msg.senderId}] ${msg.content}`);
  if (msg.showProfileImage) {
    console.log(`---SHOW profile image for ${msg.senderId}`);
  }
});
