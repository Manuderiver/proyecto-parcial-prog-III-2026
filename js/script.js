/**
 * Clase para gestionar un contador individual
 */
class Contador {
  constructor(tarjetaElement) {
    this.tarjeta = tarjetaElement;
    this.valor = 0;
    
    // Elementos DOM
    this.displayNumero = this.tarjeta.querySelector(".contador");
    this.botonSumar = this.tarjeta.querySelector(".sumar");
    this.botonRestar = this.tarjeta.querySelector(".restar");
    
    this.inicializar();
  }
  
  inicializar() {
    // Asignar eventos
    this.botonSumar.addEventListener("click", () => this.sumar());
    this.botonRestar.addEventListener("click", () => this.restar());
    
    // Mostrar estado inicial
    this.actualizar();
  }
  
  sumar() {
    this.valor++;
    this.actualizar();
  }
  
  restar() {
    if (this.valor > 0) {
      this.valor--;
      this.actualizar();
    }
  }
  
  reiniciar() {
    this.valor = 0;
    this.actualizar();
  }
  
  actualizar() {
    this.displayNumero.textContent = this.valor;
    
    if (this.valor === 0) {
      this.tarjeta.classList.add("cero");
      this.botonRestar.disabled = true;
    } else {
      this.tarjeta.classList.remove("cero");
      this.botonRestar.disabled = false;
    }
  }
  
  obtenerValor() {
    return this.valor;
  }
}

/**
 * Clase para gestionar el panel completo
 */
class PanelContadores {
  constructor() {
    this.tarjetas = document.querySelectorAll(".card");
    this.botonReiniciar = document.getElementById("reiniciar");
    this.contadores = [];
    
    this.inicializar();
  }
  
  inicializar() {
    this.tarjetas.forEach((tarjeta, indice) => {
      const contador = new Contador(tarjeta);
      this.contadores.push(contador);
    });
    
    this.botonReiniciar.addEventListener("click", () => this.reiniciarTodos());
  }
  
  reiniciarTodos() {
    this.contadores.forEach((contador) => {
      contador.reiniciar();
    });
    console.log("✅ Todos los contadores han sido reiniciados");
  }
  
  obtenerTotal() {
    return this.contadores.reduce((suma, contador) => suma + contador.obtenerValor(), 0);
  }
  
  obtenerEstadisticas() {
    const total = this.obtenerTotal();
    const promedio = (total / this.contadores.length).toFixed(2);
    const maximo = Math.max(...this.contadores.map(c => c.obtenerValor()));
    
    return { total, promedio, maximo };
  }
}

// Instanciar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const panel = new PanelContadores();
});