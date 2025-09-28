let carrito = [];

// Lista de productos con categorías y subcategorías
const productos = [
  // Frutas
  { 
    nombre: "Manzanas Orgánicas", 
    precio: 2.50, 
    categoria: "Frutas", 
    imagen: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    descripcion: "Manzanas frescas, cultivadas sin pesticidas, ricas en fibra y vitaminas."
  },
  { 
    nombre: "Plátanos", 
    precio: 1.80, 
    categoria: "Frutas", 
    imagen: "https://5aldia.cl/wp-content/uploads/2018/03/platano.jpg",
    descripcion: "Plátanos maduros y dulces, perfectos para energía rápida y saludable."
  },
  { 
    nombre: "Naranjas", 
    precio: 2.20, 
    categoria: "Frutas", 
    imagen: "https://camposdelabuelo.com/cdn/shop/articles/1.png?v=1742998237&width=2000",
    descripcion: "Naranjas jugosas y refrescantes, ideales para jugos naturales ricos en vitamina C."
  },

  // Arroces
  { 
    nombre: "Arroz Integral Extra", 
    precio: 3.00, 
    categoria: "Arroz", 
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDgqKqtD5mlMueKdl8Y3HsPVSrWm12Gtsvw&s",
    descripcion: "Arroz integral de alta calidad, fuente de fibra y minerales."
  },
  { 
    nombre: "Arroz Casserita", 
    precio: 3.50, 
    categoria: "Arroz", 
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72a6a1bV_m61Qa8x4op5oZ-bIzHSWXhLw_A&s",
    descripcion: "Arroz clásico de granos enteros, ideal para acompañar cualquier plato."
  },
  { 
    nombre: "Arroz Blanco Faraón", 
    precio: 2.80, 
    categoria: "Arroz", 
    imagen: "https://dojiw2m9tvv09.cloudfront.net/54185/product/faraon-saco-10kg9532.png",
    descripcion: "Arroz blanco suave y de cocción rápida, perfecto para comidas diarias."
  },

  // Menestras
  { 
    nombre: "Lentejas", 
    precio: 2.00, 
    categoria: "Menestras", 
    imagen: "https://cdn0.bioenciclopedia.com/es/posts/7/1/5/lenteja_517_600.jpg",
    descripcion: "Lentejas nutritivas, ricas en proteínas vegetales y fibra."
  },
  { 
    nombre: "Frijoles Negros", 
    precio: 2.30, 
    categoria: "Menestras", 
    imagen: "https://perubean.com/wp-content/uploads/2019/11/frijol-negro-n.jpg",
    descripcion: "Frijoles negros llenos de sabor, perfectos para guisos y sopas."
  },
  { 
    nombre: "Garbanzos", 
    precio: 2.50, 
    categoria: "Menestras", 
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_RukV_y_jboHtVSsa8FLc7LK6XhVDyiH-A&s",
    descripcion: "Garbanzos versátiles y saludables, ideales para hummus y ensaladas."
  },

  // Verduras con subcategoría "Papa"
  { 
    nombre: "Papa Blanca", 
    precio: 2.00, 
    categoria: "Verduras", 
    subcategoria: "Papa", 
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDGy0xAELslHyhNKv6z6PuEaw6k-QBYVHkTA&s",
    descripcion: "Papa blanca suave, perfecta para guisos y frituras."
  },
  { 
    nombre: "Papa Amarilla", 
    precio: 2.50, 
    categoria: "Verduras", 
    subcategoria: "Papa", 
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16SmUYXUY_L7VS5xpup13wtAVfxbr7g3MLg&s",
    descripcion: "Papa amarilla cremosa y sabrosa, ideal para puré y sopas."
  },
  { 
    nombre: "Papa Huayro", 
    precio: 2.20, 
    categoria: "Verduras", 
    subcategoria: "Papa", 
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUyJmKS503dj24z5Z1CjnmBps135aUqdRQ1A&s",
    descripcion: "Papa huayro andina con textura harinosa, excelente para sancochados."
  },

  // Otras verduras
  { 
    nombre: "Zanahorias", 
    precio: 1.50, 
    categoria: "Verduras", 
    imagen: "https://agrobesser.com/1558-large_default/zanahoria-chantenay-red-core-500gr-semillas-de-zanahoria-agp.jpg",
    descripcion: "Zanahorias frescas, crujientes y ricas en vitamina A."
  },
  { 
    nombre: "Brócoli", 
    precio: 2.00, 
    categoria: "Verduras", 
    imagen: "https://www.quironsalud.com/es/comunicacion/actualidad/brocoli.ficheros/2621447-brocoli.jpg?width=400&height=336&aspectRatio=true",
    descripcion: "Brócoli nutritivo, excelente fuente de fibra, hierro y antioxidantes."
  },
  { 
    nombre: "Lechuga", 
    precio: 1.20, 
    categoria: "Verduras", 
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJlKwuXEzhNOW8IpfoMSHIEIbvglzZX5Msg&s",
    descripcion: "Lechuga fresca y crujiente, perfecta para ensaladas saludables."
  },
];

// Mostrar productos
function mostrarProductos(lista) {
  const contenedor = document.getElementById("productos-lista");
  contenedor.innerHTML = "";

  lista.forEach(prod => {
    let div = document.createElement("div");
    div.className = "col-md-3";
    div.innerHTML = `
      <div class="card producto-card shadow-sm">
        <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
        <div class="card-body text-center">
          <h5 class="card-title">${prod.nombre}</h5>
          <p class="card-text">${prod.descripcion || "Producto fresco y de calidad."}</p>
          <p><strong>$${prod.precio.toFixed(2)}</strong></p>
          <button class="btn btn-success" onclick="agregarAlCarrito('${prod.nombre}', ${prod.precio})">Agregar</button>
          <button class="btn btn-outline-primary mt-2" 
            onclick="verRelacionados('${prod.categoria}', '${prod.subcategoria || ""}')"
            data-bs-toggle="modal" data-bs-target="#modalRelacionados">
            Ver más ${prod.subcategoria || prod.categoria}
          </button>
        </div>
      </div>
    `;
    contenedor.appendChild(div);
  });
}

// Buscar productos
document.getElementById("buscador").addEventListener("input", (e) => {
  const texto = e.target.value.toLowerCase();
  const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto));
  mostrarProductos(filtrados);
});

// Ver relacionados (misma categoría o subcategoría)
function verRelacionados(categoria, subcategoria = null) {
  let relacionados;

  if (subcategoria) {
    relacionados = productos.filter(p => p.subcategoria === subcategoria);
  } else {
    relacionados = productos.filter(p => p.categoria === categoria);
  }

  const contenedor = document.getElementById("relacionados-lista");
  contenedor.innerHTML = "";

  relacionados.forEach(prod => {
    let div = document.createElement("div");
    div.className = "col-md-4";
    div.innerHTML = `
      <div class="card producto-card shadow-sm">
        <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
        <div class="card-body text-center">
          <h5 class="card-title">${prod.nombre}</h5>
          <p class="card-text">${prod.descripcion || "Producto fresco y de calidad."}</p>
          <p><strong>$${prod.precio.toFixed(2)}</strong></p>
          <button class="btn btn-success" onclick="agregarAlCarrito('${prod.nombre}', ${prod.precio})">
            Agregar al carrito
          </button>
        </div>
      </div>
    `;
    contenedor.appendChild(div);
  });

  document.getElementById("modalRelacionadosLabel").textContent = subcategoria 
    ? `Más opciones de ${subcategoria}`
    : `Más opciones de ${categoria}`;
}

// Agregar producto
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  renderCarrito();
  abrirCarrito();
}

// Eliminar producto
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  renderCarrito();
}

// Renderizar carrito
function renderCarrito() {
  const carritoItems = document.getElementById("carrito-items");
  const carritoTotal = document.getElementById("carrito-total");
  carritoItems.innerHTML = "";

  let total = 0;
  carrito.forEach((item, index) => {
    total += item.precio;
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${item.nombre} - $${item.precio.toFixed(2)}
      <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito(${index})">X</button>
    `;
    carritoItems.appendChild(li);
  });

  carritoTotal.textContent = total.toFixed(2);
}

// Abrir y cerrar carrito
function abrirCarrito() {
  document.getElementById("carrito").classList.add("activo");
}
function cerrarCarrito() {
  document.getElementById("carrito").classList.remove("activo");
}

// Vaciar carrito
document.getElementById("vaciarCarrito").addEventListener("click", () => {
  carrito = [];
  renderCarrito();
});

// Finalizar compra
document.getElementById("formCompra").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(" ¡Gracias por tu compra!");
  carrito = [];
  renderCarrito();
  cerrarCarrito();
  e.target.reset();
});

// Botón flotante abre carrito
document.getElementById("abrirCarritoBtn").addEventListener("click", abrirCarrito);

// Mostrar todos los productos al cargar
mostrarProductos(productos);
