import { create } from "zustand";

interface OrganizationState {
  currentOrganizationId: string | null;
  setCurrentOrganizationId: (id: string | null) => void;
}

const useOrganizationStore = create<OrganizationState>((set) => ({
  currentOrganizationId: null,
  setCurrentOrganizationId: (id) => set({ currentOrganizationId: id }),
}));

export default useOrganizationStore;
