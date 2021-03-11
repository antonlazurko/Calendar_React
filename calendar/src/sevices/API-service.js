import axios from 'axios';
// import 'regenerator-runtime/runtime.js';
// import ErrorDecorator from './API-error-Decorator.js';
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
  // @ErrorDecorator
  async getEvent() {
    const { data, status } = await axios.get(`${URL}${SYSTEM}/${ENTITY}`);
    return { data, status };
  }
  // @ErrorDecorator
  async addEvent(body) {
    const { data, status } = await axios.post(
      `${URL}${SYSTEM}/${ENTITY}`,
      body,
    );
    return { data, status };
  }
  // @ErrorDecorator
  async deleteEvent(id) {
    const { status } = await axios.delete(`${URL}${SYSTEM}/${ENTITY}/${id}`);
    return status;
  }
}
export const eventsSingleton = new EventAPI();
