export type TreatmentCategory =
  | "cosmetic"
  | "restorative"
  | "general"
  | "surgical"
  | "digital"
  | "tourism";

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: TreatmentCategory;
}

export interface TreatmentCategoryInfo {
  id: TreatmentCategory;
  title: string;
  description?: string;
}
