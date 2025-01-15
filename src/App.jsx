import './App.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';


function App() {

  const [slidePerView, setSlidePerView] = useState(3);
  const produtos = [
    { id: '1', name: 'Headphone 1', price: 100.99, image: './img/1.jpg' },
    { id: '2', name: 'Headphone 2', price: 200.99, image: './img/2.jpg' },
    { id: '3', name: 'Headphone 3', price: 300.99, image: './img/3.jpg' },
    { id: '4', name: 'Headphone 4', price: 400.99, image: './img/4.jpg' },
    { id: '5', name: 'Headphone 5', price: 500.99, image: './img/5.jpg' },
    { id: '6', name: 'Headphone 6', price: 600.99, image: './img/6.jpg' },
    { id: '7', name: 'Headphone 7', price: 700.99, image: './img/7.jpg' },
    { id: '8', name: 'Headphone 8', price: 800.99, image: './img/8.jpg' },
    { id: '9', name: 'Headphone 9', price: 900.99, image: './img/9.jpg' },
  ]

  useEffect(() => {

    function handleResize(){
      if(window.innerWidth < 720) {
        setSlidePerView(1);
      } else{
        setSlidePerView(2);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [])

  return (
    
    <div className='container'>
      <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="indexcontato.html">Contato</a></li>
            </ul>
      </nav>

      <main>
        <section class="hero">
            <h1>Seja bem vindo ao nosso e-commerce com JS</h1>
            <p>Encontre aqui seu produto!</p>
            <div class="toggle-button" id="toggle-button">Menu</div>
        </section>
        <section class="products">
            <h2>Produtos em destaque</h2>
            <div class="product-grid">
              <Swiper
                slidesPerView={3}
                pagination={{ clickable: true }}
                navigation
              >
              {produtos.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.image}
                    alt={`Produto ${item.id}`}
                    className='slide-item'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          </section>

        <section class="cart">
            <h2>Carrinho de compras</h2>
            <table>
                <thread>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th>Subtotal</th>
                    </tr>
                </thread>
            </table>
            <p>Total: <span id="total">R$0.00</span></p>
            <button id="checkout">Pagar</button>
        </section>
    </main>
    <footer>
        <p> &copy; 2024 EBAC E-commerce 2.0</p>
    </footer>



      
    </div>
  )
}


export default App
