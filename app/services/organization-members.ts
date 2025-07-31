import config from "~/config";
import { HTTPError } from "~/types/http";
import {
  FindManyOptions,
  FindOneOptions,
  OrganizationMember,
} from "~/types/models";
import { queryBuilder } from "~/utils/query";

type GetOrganizationParams = FindOneOptions<OrganizationMember>;

export async function getOrganizationMembers(
  id: string,
  params: GetOrganizationParams = {},
  headers: HeadersInit = {}
): Promise<OrganizationMember[]> {
  const queryString = params ? `?${queryBuilder(params)}` : "";
  const response = await fetch(
    `${config.apiUrl}/organization-members/${id}${queryString}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      credentials: "include",
    }
  );

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(
      errorData.message || "Failed to fetch organization members"
    );
  }

  return response.json();
}

type GetOrganizationMembersParams = FindManyOptions<OrganizationMember>;

export async function getOrganizationsMembers(
  params?: GetOrganizationMembersParams | null,
  headers: HeadersInit = {}
): Promise<OrganizationMember[]> {
  const queryString = params ? `?${queryBuilder(params)}` : "";
  const response = await fetch(
    `${config.apiUrl}/organization-members${queryString}`,
    {
      method: "GET",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Failed to fetch organizations");
  }

  const data = (await response.json()).data as OrganizationMember[];
  return data;
}
