// Cut the string a in last character "_" and return the first part of the string. If there is no character "_" return false
const cutLastId = (a: string) : string | boolean => {
  const lastCharacter = a.lastIndexOf("_");
  if (lastCharacter === -1) {
    return false;
  }
  return a.slice(0, lastCharacter);
};

export default cutLastId;