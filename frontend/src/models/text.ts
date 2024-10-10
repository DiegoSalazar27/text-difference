export interface Change {
  text: string;
  added: boolean;
  removed: boolean;
  summary: string;
}


export interface TextComparison {
  originalTextBrief?: string;
  updatedTextBrief?: string;
  changes?: Change[];
}