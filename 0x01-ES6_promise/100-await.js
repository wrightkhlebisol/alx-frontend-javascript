import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => ({
      photo: res[0].body,
      user: {
        firstName: res[1].firstName,
        lastName: res[1].lastName,
      },
    }))
    .catch(() => ({ photo: null, user: null }));
}
