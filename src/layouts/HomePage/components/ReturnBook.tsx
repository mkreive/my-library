import React from 'react';
import BookModel from '../../../models/BookModel';

export const ReturnBook: React.FC<{ book: BookModel }> = ({ book }) => {
    console.log(book.img);
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
                {book.img ? (
                    <img src={book.img} alt='book cover' width='151' height='233' />
                ) : (
                    <img
                        src={require('./../../../Images/BooksImages/new-book-fallback.png')}
                        width='151'
                        height='233'
                        alt='book cover'
                    />
                )}

                <h6 className='mt-2'>{book.title}</h6>
                <p>{book.author}</p>
                <a className='btn secondary-color text-white' href='/books'>
                    Reserve
                </a>
            </div>
        </div>
    );
};
