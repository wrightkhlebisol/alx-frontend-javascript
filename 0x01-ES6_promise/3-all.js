import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const response = Promise.allSettled([uploadPhoto(), createUser()]);

  response
    .then(
      (res) => console.log(`${res[0].value.body} ${res[1].value.firstName} ${res[1].value.lastName}`),
    )
    .catch(() => console.log('Signup system offline'));
}
