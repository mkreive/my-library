import React from 'react';

export const ReturnBook = () => {
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
                <img
                    src={require('./../../../Images/BooksImages/new-book-0.png')}
                    width='151'
                    height='233'
                    alt='book'
                />
                <h6 className='mt-2'>The Song Of Achilles</h6>
                <p>Madeline Miller</p>
                <a className='btn secondary-color text-white' href='/books'>
                    Reserve
                </a>
            </div>
        </div>
    );
};
