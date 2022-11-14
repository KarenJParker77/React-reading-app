export function generateUserId(length) {
  const now = Date.now().toString();
  let uniqueId = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
  const charsLength = chars.length;
  for (let i = 0; i < length - now.length; i++) {
    uniqueId += chars.charAt(Math.floor(Math.random() * charsLength));
  }

  return uniqueId + Date.now();
}
