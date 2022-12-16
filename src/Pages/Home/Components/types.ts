export type RecentNewsProps = {
  title: string;
  id?: number;
  content: {
    image: string;
    category: string;
    description: string;
    id: number;
  }[];
};
