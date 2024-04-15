const ItemListContainer = ({mensaje1, mensaje2}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center p-4">
                    <h2 className="fs-2 fst-italic colorGris1">{mensaje1}</h2>
                    <h4 className="fs-4 fw-normal colorGris1">{mensaje2}</h4>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;