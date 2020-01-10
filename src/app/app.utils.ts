import { Book, BookDetails } from './app.models';

export const parseBooksList = booksData => {
  const newBookData: Book = {};
  booksData.items.forEach(bookData => {
    newBookData[bookData.id] = {
      title: bookData.volumeInfo.title,
      subtitle: bookData.volumeInfo.subtitle,
      authors: bookData.volumeInfo.authors,
      publisher: bookData.volumeInfo.publisher,
      publishedDate: bookData.volumeInfo.publishedDate,
      description: bookData.volumeInfo.description,
      pageCount: bookData.volumeInfo.pageCount,
      categories: bookData.volumeInfo.categories,
      imageLink: bookData.volumeInfo.imageLinks
        ? bookData.volumeInfo.imageLinks.thumbnail
        : '',
      language: bookData.volumeInfo.language,
      isEbook: bookData.saleInfo.isEbook,
      price: bookData.saleInfo.listPrice
        ? bookData.saleInfo.listPrice.amount
        : -1,
      discountedPrice: bookData.saleInfo.retailPrice
        ? bookData.saleInfo.retailPrice.amount
        : -1,
      buyLink: bookData.saleInfo.buyLink,
      isPdfAvailable: bookData.accessInfo.pdf.isAvailable,
      pdfLink: bookData.accessInfo.pdf.link ? bookData.accessInfo.pdf.link : '',
      sampleLink: bookData.accessInfo.webReaderLink,
    };
  });
  return newBookData;
};

export const addBook = basicBookData => {
  const newId = Math.random() * 1000 + 'abc';
  const newBookData: BookDetails = {
    title: basicBookData.title,
    subtitle: '',
    authors: basicBookData.authors.split(','),
    publisher: basicBookData.publisher,
    publishedDate: basicBookData.publishedDate,
    description: 'To be Added',
    pageCount: 200,
    categories: [],
    imageLink: '',
    language: 'en',
    isEbook: false,
    price: -1,
    discountedPrice: -1,
    buyLink: '',
    isPdfAvailable: false,
    pdfLink: '',
    sampleLink: '',
  };
  return { newId, newBookData };
};
