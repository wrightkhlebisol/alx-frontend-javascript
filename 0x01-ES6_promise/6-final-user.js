import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  Promise.allResolved([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((res) => res);
}
