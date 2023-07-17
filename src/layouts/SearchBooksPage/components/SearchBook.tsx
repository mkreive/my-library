import BookModel from '../../../models/BookModel';

export const SearchBook: React.FC<{ book: BookModel }> = ({ book }) => {
    return (
        <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
            <div className='row g-0'>
                <div className='col-md-2'>
                    <div className='d-none d-lg-block'>
                        {book.img ? (
                            <img src={`data:image/jpeg;base64,${book.img}`} width='123' height='196' alt='Book cover' />
                        ) : (
                            <img
                                src={require('../../../Images/BooksImages/new-book-fallback.png')}
                                width='123'
                                height='196'
                                alt='Book cover'
                            />
                        )}
                    </div>
                    <div
                        className='d-lg-none d-flex justify-content-center 
                        align-items-center'
                    >
                        {book.img ? (
                            <img src={`data:image/jpeg;base64,${book.img}`} width='123' height='196' alt='Book cover' />
                        ) : (
                            <img
                                src={require('../../../Images/BooksImages/new-book-fallback.png')}
                                width='123'
                                height='196'
                                alt='Book cover'
                            />
                        )}
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='card-body'>
                        <h5 className='card-title'>{book.author}</h5>
                        <h4>{book.title}</h4>
                        <p className='card-text'>{book.description}</p>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <a className='btn btn-md main-color text-white' href='/home'>
                        View details
                    </a>
                </div>
            </div>
        </div>
    );
};
