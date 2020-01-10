export interface NewBookData {
  title: string;
  authors: string;
  publisher: string;
  publishedDate: string;
}

export const currentDate = new Date();

export const initialNewBookData = {
  title: '',
  author: '',
  publisher: '',
  publishedDate: '',
};
