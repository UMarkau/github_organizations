import axios from "axios";
import { IOrganization } from "../types";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com/organizations",
});

export const fetchOrganizations = (
  perPage: number = 6,
  since: number = 4242
) => {
  return axiosInstance.get<IOrganization[]>("", {
    params: {
      per_page: perPage,
      since,
    },
  });
};
