export interface Prompt {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  agents: string[];
  tags: string[];
  tips: string;
}

export type Category = 
  | "All"
  | "Content Writing"
  | "Coding"
  | "Image Generation"
  | "Business"
  | "Marketing"
  | "Career"
  | "Creative";
