import axios from "axios";
export function settingLog() {
  axios.interceptors.request.use(request => {
    console.log("Starting Request", request.url);
    return request;
  });
}
