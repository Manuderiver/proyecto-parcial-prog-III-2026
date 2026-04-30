# 📊 Panel de Contadores - Proyecto Parcial Programación III

## 👥 Integrantes

- **Manuel Aguilar** (@Manuderiver)
- **Agustín González** (@sugga222)

---

## 📝 Descripción

Aplicación web interactiva que permite gestionar múltiples contadores de forma independiente. Cada contador tiene botones para incrementar, decrementar y un botón global para reiniciar todos los valores a cero. La aplicación incluye validación para evitar números negativos y un panel de estadísticas en tiempo real.

---

## 🎯 Funcionalidades

✅ **Contadores Independientes** - Cada tarjeta funciona de manera autónoma  
✅ **Incrementar/Decrementar** - Botones + y − para cada contador  
✅ **Validación de Cero** - No permite ir por debajo de 0  
✅ **Reinicio Global** - Un botón para reiniciar todos los contadores  
✅ **Panel de Estadísticas** - Muestra Total, Promedio y Máximo en tiempo real  
✅ **Indicadores de Estado** - Badges que muestran si cada contador está activo o inactivo  
✅ **Diseño Responsive** - Se adapta a mobile, tablet y desktop  
✅ **Interfaz Profesional** - Estilos modernos con gradientes y efectos hover  

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Flexbox, Grid, Gradientes, Animaciones
- **JavaScript ES6+** - Programación Orientada a Objetos (OOP)
- **Git** - Control de versiones

---

## 📁 Estructura del Proyecto
proyecto-parcial-prog-III-2026/ ├── 📁 activos/ # Recursos del sitio │ ├── 📁 favicon/ # Iconos del navegador │ └── 📁 img/ # Imágenes e ilustraciones ├── 📁 css/ # Hojas de estilo │ ├── 📁 componentes/ # Componentes reutilizables │ │ ├── botones.css # Estilos de botones │ │ └── card.css # Estilos de tarjetas │ └── index.css # Estilos globales e imports ├── 📁 js/ # Lógica de la aplicación │ └── script.js # Clases y funcionalidad ├── 📁 páginas/ # Directorio para futuras páginas ├── index.html # Página principal └── README.md


---

## 🏗️ Arquitectura de Código

### **Clases JavaScript**

#### `Contador`
Gestiona cada contador individual:

```javascript
// Métodos principales:
- constructor(tarjetaElement)    // Inicializa el contador
- sumar()                         // Incrementa el valor
- restar()                        // Decrementa el valor
- reiniciar()                     // Resetea a 0
- actualizar()                    // Sincroniza UI con estado
- obtenerValor()                  // Retorna el valor actual

PanelContadores
Gestiona el panel completo:

// Métodos principales:
- constructor()                   // Inicializa el panel
- reiniciarTodos()               // Reinicia todos los contadores
- obtenerTotal()                 // Retorna suma de todos
- obtenerEstadisticas()          // Retorna total, promedio, máximo
- actualizarEstadisticas()       // Actualiza panel en tiempo real

🚀 Cómo Usar
1. Clonar el repositorio
git clone https://github.com/Manuderiver/proyecto-parcial-prog-III-2026.git
cd proyecto-parcial-prog-III-2026

2. Abrir en el navegador
Opción A: Doble clic

Haz doble clic enindex.html
Opción B: Live Server (Recomendado)

En VS Code: Haz clic derecho enindex.html
Selecciona: "Abrir con servidor en vivo"
3. Interactuar con la aplicación
🔢 Contador : Muestra el valor actual
➕ Botón + : Incrementa el contador
➖ Botón − : Disminuye el contador (no baja de 0)
🔄 Reiniciar Todos : Resetea todos los contadores a 0
📊 Panel Estadísticas : Muestra Total, Promedio y Máximo en tiempo real
🎨 Características visuales
Diseño Moderno
Degradados lineales en botones y encabezado
Paleta de colores profesional
Tipografía clara y legible (Poppins/Segoe UI)
Interactividad
Efectos hover en tarjetas y botones
Transiciones suaves (0.3s cúbico-bezier)
Insignias indicadores de estado
Escalado y sombras dinámicas
Responsividad
Escritorio: 4 contadores en fila
Tableta: 2-3 contadores adaptados
Móvil: 1 contador por línea, botón ancho
🔀 Ramas Git
main- Rama principal (producción)
dev- Rama de desarrollo
feature/restructure-project- Reestructuración con CSS modular y POO
📊 Estados de los Contadores
Activo (Valor > 0)
Badge: "Activo" (verde)
Botón −: Habilitado
Color: Gradiente azul-indigo
Opacidad: 100%
Inactivo (Valor = 0)
Badge: "Inactivo" (gris)
Botón −: Deshabilitado
Color: Gris claro
Opacidad: 80%
Tarjeta: Fondo gris

🎓 Conceptos Implementados
Programación Orientada a Objetos (OOP)
Encapsulación en clases
Métodos y propiedades privadas/públicas
Herencia de conceptos
Manipulación del DOM
querySelector y querySelectorAll
agregarOyenteDeEventos
Lista de clases (agregar/eliminar)
textoContenido
Diseño adaptable
Consultas de los medios
Flexbox
Enfoque prioritario para dispositivos móviles
CSS Modular
Componentes separados
Variables CSS
Importación de archivos
📚 Mejoras Futuras
 Agregar persistencia con LocalStorage
 Historial de cambios
 Temas claros/oscuros (Modo oscuro)
 Exportar estadísticas a CSV
 Gráficos con Chart.js
 Animaciones más complejas (Framer Motion)
 Base de datos para guardar datos
 Backend REST de API
🐛 Solución de Problemas
Los botones no funcionan
Verifica que js/script.jsesté en la ruta correcta
Abre la consola ( F12) y busca errores
Recarga la página ( F5)
Los estilos no se ven
Verifica que css/index.cssesté en la ruta correcta
Limpiar el caché del navegador ( Ctrl + Shift + Delete)
Recarga Hard ( Ctrl + Shift + R)
Live Server no inicia
Asegúrese de tener la extensión instalada
Intenta instalar nuevamente desde Extensiones
📄 Licencia
Proyecto académico - Programación III 2026
Universidad: [Tu Universidad]

📞 Contacto
Para preguntas o sugerencias sobre el proyecto:

Manuel Aguilar - @Manuderiver
Agustín González - @sugga222
✅ Checklist de Desarrollo
 Estructura modular de carpetas.
 HTML semántico y accesible
 CSS con componentes reutilizables
 JavaScript con POO
 Validación de contadores
 Panel de estadísticas
 Diseño responsive
 Documentación completa
 Control de versiones con Git

 
---

## ✅ **Pasos para agregarlo:**

1. En VS Code, haz clic derecho en la **raíz** del proyecto
2. Selecciona **"New File"**
3. Escribe: `README.md`
4. Pega el contenido de arriba
5. Guarda (`Ctrl + S`)

---

## ✅ **Haz commit:**

```bash
git add README.md
git commit -m "docs: add comprehensive README.md

- Project description and features
- Complete folder structure
- JavaScript OOP architecture
- Usage instructions
- Troubleshooting guide
- Future improvements
- Professional documentation"

git push origin feature/restructure-project