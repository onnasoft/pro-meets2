import config from "~/config";
import { HTTPError } from "~/types/http";
import { Organization } from "~/types/models";
import { Create, FindManyOptions, FindOneOptions, queryBuilder, Update } from "~/rest";

type GetOrganizationParams = FindOneOptions<Organization>;

export async function getOrganization(
  id: string,
  params: GetOrganizationParams = {},
  headers: HeadersInit = {}
): Promise<Organization> {
  const queryString = params ? `?${queryBuilder(params)}` : "";
  const response = await fetch(
    `${config.apiUrl}/organizations/${id}${queryString}`,
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
    throw new Error(errorData.message || "Failed to fetch organization");
  }

  return response.json();
}

type GetOrganizationsParams = FindManyOptions<Organization>;

export async function getOrganizations(
  params?: GetOrganizationsParams | null,
  headers: HeadersInit = {}
): Promise<Organization[]> {
  const queryString = params ? `?${queryBuilder(params)}` : "";
  const response = await fetch(`${config.apiUrl}/organizations${queryString}`, {
    method: "GET",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Failed to fetch organizations");
  }

  const data = (await response.json()).data as Organization[];
  return data;
}

export async function createOrganization(
  payload: Create<Organization>
): Promise<Organization> {
  console.log("Creating organization with payload:", payload);
  const response = await fetch(`${config.apiUrl}/organizations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Organization creation failed");
  }

  return response.json();
}

export async function updateOrganization(
  id: string,
  payload: Update<Organization>
): Promise<Organization> {
  const response = await fetch(`${config.apiUrl}/organizations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Organization update failed");
  }

  return response.json();
}

export async function deleteOrganization(id: number): Promise<void> {
  const response = await fetch(`${config.apiUrl}/organizations/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Organization deletion failed");
  }
}
