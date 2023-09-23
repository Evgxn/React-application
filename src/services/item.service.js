import axios from "axios";

const url = "https://localhost:7024/api/";

export const ItemService = {
  async getAll() {
    const response = await axios.get(`${url}User/get-all-user`);

    console.log(response.data);
    return response;
  },

  async getById(id) {
    const response = await axios
      .get(`https://localhost:7024/api/User/get-user?id=${id}`)
      .then((data) => console.log(data));

    //console.log(response);
    return response.data;
  },
  async createUser(user) {
    const response = await axios
      .post("https://localhost:7024/api/User/create-user", user)
      .catch((err) => console.log(err));

    console.log(response);
  },

  async updateUser(user) {
    const response = await axios.post(
      "https://localhost:7024/api/User/update-user",
      user,
    );

    console.log(response);
  },

  async delete(id) {
    const response = await axios.delete(
      `https://localhost:7024/api/User/delete-user?id=${id}`,
    );

    console.log(response);
  },
};
