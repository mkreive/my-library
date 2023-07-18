import { useEffect, useState } from 'react';
import BookModel from '../../models/BookModel';
import { SpinnerLoading } from '../Utils/SpinnerLoading';

export const BookCheckoutPage = () => {
    const [book, setBook] = useState<BookModel>();
    const [isLoadingBook, setIsLoadingBook] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const bookId = window.location.pathname.split('/')[2];

    useEffect(() => {
        const fetchBook = async () => {
            const baseUrl: string = `http://localhost:8080/api/books/${bookId}`;
            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseJson = await response.json();
            const loadedBook: BookModel = {
                id: responseJson.id,
                title: responseJson.title,
                author: responseJson.author,
                description: responseJson.description,
                copies: responseJson.copies,
                copiesAvailable: responseJson.copiesAvailable,
                category: responseJson.category,
                img: responseJson.img,
            };

            setBook(loadedBook);
            setIsLoadingBook(false);
        };

        fetchBook().catch((error: any) => {
            setIsLoadingBook(false);
            setHttpError(error.message);
        });
    }, [isLoadingBook, book, bookId]);

    if (isLoadingBook) {
        return <SpinnerLoading />;
    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        );
    }

    return (
        <div>
            <div className='container d-none d-lg-block'>
                <div className='row mt-5'>
                    <div className='col-sm-2 col-md-2'>
                        {book?.img ? (
                            <img
                                src={`data:image/jpeg;base64,${book?.img}`}
                                width='226'
                                height='349'
                                alt='Book Cover'
                            />
                        ) : (
                            <img
                                alt='Book Cover'
                                src={require('./../../Images/BooksImages/new-book-fallback.png')}
                                width='226'
                                height='349'
                            />
                        )}
                    </div>

                    <div className='col-4 col-md-4 container'>
                        <div className='ml-2'>
                            <h2>{book?.title}</h2>
                            <h5 className='text-primary'>{book?.author}</h5>
                            <p className='lead'>{book?.description}</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className='container d-lg-none mt-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    {book?.img ? (
                        <img src={`data:image/jpeg;base64,${book?.img}`} width='226' height='349' alt='Book Cover' />
                    ) : (
                        <img
                            alt='Book Cover'
                            src={require('./../../Images/BooksImages/new-book-fallback.png')}
                            width='226'
                            height='349'
                        />
                    )}
                </div>

                <div className='mt-4'>
                    <div className='ml-2'>
                        <h2>{book?.title}</h2>
                        <h5 className='primary'>{book?.author}</h5>
                        <p className='lead'>{book?.description}</p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};
