import axios from "axios";
import { IOrganization, IPublicMember } from "../types";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
});

export const fetchOrganizations = (
  perPage: number = 6,
  since: number = 4242
) => {
  return axiosInstance.get<IOrganization[]>("/organizations", {
    params: {
      per_page: perPage,
      since,
    },
  });
};

export const fetchOrgPublicMembers = (orgName: string) => {
  return axiosInstance.get<IPublicMember[]>(`/orgs/${orgName}/public_members`);
};
