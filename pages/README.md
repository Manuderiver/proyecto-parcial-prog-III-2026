# Proyecto Parcial Programación III

## 👥 Integrantes
- Manuel Aguilar (Manuderiver)
- Agustin Gonzalez (sugga222)

## 📝 Descripción
Aplicación web con múltiples contadores independientes, con botones para incrementar, decrementar y reiniciar todos los contadores. El proyecto implementa una estructura modular y escalable siguiendo buenas prácticas de desarrollo.

## 🛠️ Tecnologías utilizadas
- **HTML5** - Estructura semántica
- **CSS3** - Flexbox y Grid responsive
- **JavaScript (ES6+)** - Programación orientada a objetos (OOP)

## ✨ Funcionalidades
✅ Contadores independientes  
✅ Validación para no bajar de cero  
✅ Reinicio general de todos los contadores  
✅ Cambios dinámicos de estilos según el estado  
✅ Interfaz responsive (mobile, tablet, desktop)  
✅ Efectos visuales y transiciones suaves  

## 📁 Estructura del Proyecto
proyecto-parcial-prog-III-2026/ ├── activos/ │ ├── favicon/ # Iconos del navegador │ └── img/ # Imágenes e ilustraciones ├── css/ │ ├── componentes/ │ │ ├── botones.css # Estilos de botones │ │ └── card.css # Estilos de tarjetas │ └── index.css # Estilos globales e imports ├── js/ │ └── script.js # Lógica con OOP ├── páginas/ # Otras páginas HTML (si las hay) ├── index.html # Página principal └── README.md


## 🏗️ Arquitectura de Código

### **Clases JavaScript:**

#### `Contador`
Gestiona cada contador individual:
- `sumar()` - Incrementa el valor
- `restar()` - Decrementa el valor
- `reiniciar()` - Resetea a 0
- `actualizar()` - Sincroniza UI con estado
- `obtenerValor()` - Retorna el valor actual

#### `PanelContadores`
Gestiona el panel completo:
- `reiniciarTodos()` - Reinicia todos los contadores
- `obtenerTotal()` - Retorna suma de todos
- `obtenerEstadisticas()` - Retorna total, promedio y máximo

## 🚀 Cómo Usar

1. **Clonar el repositorio:**
```bash
git clone https://github.com/Manuderiver/proyecto-parcial-prog-III-2026.git

Abrir en el navegador:
Doble clic en index.htmlO
Usar un servidor local (Live Server en VS Code)
Interactivo:
Usa +incrementar para cada contador
Usa −para decrementar (no baja de 0)
Usa 🔄 Reiniciar Todospara resetear todo
🔀 Ramas Utilizadas
main- Rama principal (producción)
dev- Rama de desarrollo
feature-contadores-manuel- Funcionalidad de contadores
feature-estilos- Estilos visuales
🎯 Mejoras Futuras
 Agregar persistencia con LocalStorage
 Historial de cambios
 Temas claros/oscuros
 Exportar estadísticas a CSV
 Animaciones más complejas
📄 Licencia
Proyecto académico - Programación III 2026

📞 Contacto
Para preguntas o sugerencias, contacta a los integrantes del proyecto.


---

### **PASO 6: Organizar archivos (Opcional)**

Si tienes imágenes o íconos:
- Mueve las imágenes a `assets/img/`
- Mueve los íconos a `assets/favicon/`

---

### ✅ **Resumen de Pasos:**

| Paso | Acción |
|------|--------|
| 1️⃣ | Crear carpetas: `assets/`, `css/components/`, `js/`, `pages/` |
| 2️⃣ | Crear `css/components/buttons.css` |
| 3️⃣ | Crear `css/components/card.css` |
| 4️⃣ | Actualizar `css/index.css` con imports |
| 5️⃣ | Crear `js/script.js` con clases |
| 6️⃣ | Actualizar `index.html` con paths correctos |
| 7️⃣ | Actualizar `README.md` |
| 8️⃣ | Probar en navegador que funcione todo |

¿Necesitas ayuda con algún paso específico? 😊