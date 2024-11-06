import axios from "axios";
import AppConstrains from "../constrains/AppConstrains";
const baseUrl = AppConstrains.baseURL;
export default axios.create({ baseURL: baseUrl });
