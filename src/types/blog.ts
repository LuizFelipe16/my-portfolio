export type PostData = {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    headline?: string;
    category?: string;
    banner: {
      url: string;
    };
    description: string;
    subtitle: string;
    author: string;
    content: {
      heading: string;
      body: string;
    }[];
  };
}
