export default function generateRandomId() {
  return Math.trunc(Math.random() * 1000).toString(16);
}
