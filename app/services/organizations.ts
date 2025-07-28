import config from "~/config";
import { HTTPError } from "~/types/http";
import { Create, Organization, Update } from "~/types/models";

export async function getOrganization(id: number): Promise<Organization> {
  const response = await fetch(`${config.apiUrl}/organizations/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Failed to fetch organization");
  }

  return response.json();
}

export async function getOrganizations(): Promise<Organization[]> {
  const response = await fetch(`${config.apiUrl}/organizations`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Failed to fetch organizations");
  }

  return response.json();
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
  id: number,
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
