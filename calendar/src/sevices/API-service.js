import axios from 'axios';

const SYSTEM = `anton_lazurko`;
const ENTITY = `events`;
const URL = 'http://158.101.166.74:8080/api/data/';

let instance = null;

class EventAPI {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  async getEvent() {
    try {
      const { data, status } = await axios.get(`${URL}${SYSTEM}/${ENTITY}`);
      return { data, status };
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  async addEvent(body) {
    try {
      const { data, status } = await axios.post(
        `${URL}${SYSTEM}/${ENTITY}`,
        body,
      );
      return { data, status };
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  async deleteEvent(id) {
    try {
      const { status } = await axios.delete(`${URL}${SYSTEM}/${ENTITY}/${id}`);
      return status;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
}
export const eventsSingleton = new EventAPI();
