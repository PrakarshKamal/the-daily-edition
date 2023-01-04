type Category =
  | "general"
  | "entertainment"
  | "business"
  | "sports"
  | "science"
  | "health"
  | "technology";

type NewsResponse = {
  pagination: Pagination;
  data: NewsArticle[];
};

type Pagination = {
  count: Int;
  offset: Int;
  limit: Int;
  total: Int;
};

type NewsArticle = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  language: string;
  image: string | null;
  source: string;
  published_at: string;
  title: string;
  url: string;
};
