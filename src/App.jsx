import Carousel from "./Components/Carousel"
import ItemListContainer from "./Components/ItemListContainer"
import NavBar from "./Components/NavBar"

function App() {

    return (
        <>
            <NavBar />
            <Carousel />
            <ItemListContainer mensaje1 = {"¡Descubre el sabor de la felicidad!"} mensaje2 = {"Delicias frescas y tentadoras te esperan en cada bocado. ¡Haz que cada momento sea dulce con nuestros productos artesanales de panadería y pastelería!"} />
        </>
    )
}

export default App
