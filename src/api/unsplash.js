import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 91fdbc5017498180e810533e6bd759c7ee21ec4077cd4e90d58b18e8f4c4e3a8"
  }
});
