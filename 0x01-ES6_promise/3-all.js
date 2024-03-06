import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const response = Promise.all([uploadPhoto(), createUser()]);

  response
    .then(
      (res) => console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`),
    )
    .catch(() => console.log('Signup system offline'));
}
