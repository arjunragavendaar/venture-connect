const BASE_URL = 'http://localhost:3001/venture-connect';
const UPLOAD_URL='http://localhost:3001/';


const API_ENDPOINTS = {
  COMMENTS_ADD: `${BASE_URL}/comments-add`,
  COMMENTS_UPDATE: `${BASE_URL}/comments-edit`,
  COMMENTS_DELETE: `${BASE_URL}/comments-delete`,
  COMMENTS_GET: `${BASE_URL}/comments-get`,
  // GET_USER: `${BASE_URL}/comments-delete`
  CREATEPOST: `${BASE_URL}/createpost`,
  SIGNUP: `${BASE_URL}/signup`,
  SIGNIN:`${BASE_URL}/signin`,
  PROFILEPICUPLOAD:`${BASE_URL}/upload`,
  PROFILEPICVIEW:`${UPLOAD_URL}/uploads/`,
  FETCHFEED:`${BASE_URL}/fetchfeed`,
};

export default API_ENDPOINTS;