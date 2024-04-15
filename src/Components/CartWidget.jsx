import cart from "../assets/Cart.svg"

const CartWidget = () => {
    return (
        <div className="container">
            <button type="button" className="btn position-relative">
                <img src={cart} alt="Carrito" width={32} />
                <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
        </div>
    )
}

export default CartWidget;