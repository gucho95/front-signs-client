import client from 'store/client';
import endpoints from 'store/endpoints';

const media = {
  find: (payload) => client().get(endpoints.mediaAll, { params: payload }),
  upload: (payload) => client().post(endpoints.mediaUpload, payload),
  update: (payload) => client().put(`${endpoints.media}/${payload.id}`, payload),
  remove: (payload) => client().delete(`${endpoints.media}/${payload.id}`, payload),
};

export default media;
