import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=50&inc=name,email,dob,phone,picture";

export default {
  search: function () {
    return axios.get(BASEURL);
  }
}