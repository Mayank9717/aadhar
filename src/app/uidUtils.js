export const generateUID = () => {
  const chars = "0123456789";
  let uid = "";
  for (let i = 0; i < 12; i++) {
    uid += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  // Format UID as #### #### ####
  return uid.replace(/(\d{4})(?=\d)/g, "$1 ");
};
