export interface Prompt {
  id: string;
  title: string;
  description: string;
  category: string;
  prompt: string;
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
  | "Creative"
  | "Productivity";
