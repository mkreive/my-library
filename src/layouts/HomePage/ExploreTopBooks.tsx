export const ExploreTopBooks = () => {
    return (
        <div className='p-5 mb-4 bg-dark header'>
            <div className='container-fluid py-5 text-white d-flex justify-content-center align-item-center'>
                <div>
                    <h1 className='display-5 fw-bold'>Find your next adventure</h1>
                    <p className='col-md-8 fs-4'>What would you like to read next?</p>
                    <a href='/eplore' type='button' className='btn secondary-color btn-lg text-white'>
                        Explore top books
                    </a>
                </div>
            </div>
        </div>
    );
};
