import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((res) => {
    const newRes = [];
    res.forEach((re) => {
      const reObj = {};
      if (re.value instanceof Error) {
        reObj.value = re.value.message;
      } else {
        reObj.value = re.value;
      }
      reObj.status = re.status;
      newRes.push(reObj);
    });
    return newRes;
  });
}
