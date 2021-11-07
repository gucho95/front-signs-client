// auth
const signIn = `/auth/sign-in`;
const signUp = `/auth/sign-up`;
const verifyEmail = `/auth/verify-email`;
const forgotPassword = `/auth/issue-password-reset`;
const resetPassword = `/auth/reset-password`;
// email endpoints

const emailVerify = '/email-verifier/verify';
const emailFind = '/email-finder/find';

const media = `/media`;
const mediaAll = `/media/all`;
const mediaUpload = `/media/upload`;

const endpoints = {
  signIn,
  signUp,
  verifyEmail,
  forgotPassword,
  resetPassword,
  emailVerify,
  emailFind,
  media,
  mediaAll,
  mediaUpload,
};

export default endpoints;
