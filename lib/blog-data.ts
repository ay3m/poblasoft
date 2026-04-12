export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "cada-cuanto-hacer-service-al-split",
    title: "¿Cada cuánto hacer service al split?",
    excerpt: "La frecuencia ideal de mantenimiento para que tu equipo rinda bien y dure más años.",
    date: "2026-03-15",
    readTime: "3 min",
    content: `## ¿Cada cuánto hay que hacerle service al aire acondicionado?

La respuesta corta: **al menos una vez al año**, idealmente antes de que empiece la temporada de calor.

### ¿Por qué es importante?

Un split sin mantenimiento acumula polvo y suciedad en los filtros y el evaporador. Esto provoca:

- **Mayor consumo eléctrico** — el equipo trabaja más para enfriar lo mismo. Puede aumentar el consumo hasta un 30%.
- **Menor vida útil** — un compresor forzado se desgasta más rápido.
- **Olores desagradables** — la humedad atrapada en los filtros genera hongos y bacterias.
- **Pérdida de capacidad** — el equipo enfría menos aunque esté al máximo.

### ¿Qué incluye un service completo?

1. Limpieza de filtros internos
2. Limpieza del evaporador (unidad interior)
3. Limpieza del condensador (unidad exterior)
4. Verificación de presión de gas refrigerante
5. Revisión de conexiones eléctricas
6. Control de drenaje

### ¿Cuándo hacerlo?

Lo ideal es hacer el service en **septiembre u octubre**, antes de que llegue el calor fuerte. Si usás el equipo también para calefacción, conviene hacer dos services al año: uno antes del verano y otro antes del invierno.

### ¿Puedo limpiar los filtros yo?

Sí. Los filtros del split se sacan fácilmente levantando la tapa frontal. Lavalos con agua y jabón neutro, dejalos secar bien y volvelos a colocar. Esto podés hacerlo cada 2-3 semanas en temporada de uso intensivo.

Pero la limpieza profunda del evaporador y la revisión del gas requieren un técnico matriculado con las herramientas adecuadas.`,
  },
  {
    slug: "senales-aire-necesita-gas",
    title: "Señales de que tu aire necesita gas refrigerante",
    excerpt: "Cómo identificar si tu equipo tiene una pérdida de gas y qué hacer al respecto.",
    date: "2026-03-01",
    readTime: "3 min",
    content: `## ¿Cómo saber si tu aire acondicionado necesita gas?

El gas refrigerante es lo que permite que el equipo enfríe. Si hay una pérdida, el rendimiento baja hasta que eventualmente deja de enfriar.

### Señales claras de falta de gas

1. **El equipo tira aire pero no enfría** — funciona, hace ruido, pero la temperatura no baja.
2. **Se forma hielo en las cañerías** — si ves escarcha en los caños de cobre que conectan la unidad interior con la exterior, es señal de baja presión de gas.
3. **La unidad exterior no corta** — el compresor trabaja sin parar porque no alcanza la temperatura deseada.
4. **El equipo enfría menos que antes** — baja gradualmente su rendimiento a lo largo de semanas o meses.

### ¿El gas se gasta?

**No.** El gas refrigerante circula en un circuito cerrado. Si falta gas, es porque hay una pérdida en alguna soldadura, válvula o cañería. Cargar gas sin reparar la fuga es tirar plata: se va a volver a vaciar.

### ¿Qué hace un técnico?

1. Mide la presión del gas con un manómetro
2. Detecta la fuga (puede ser con detector electrónico o con espuma)
3. Repara la fuga
4. Hace vacío al sistema
5. Carga la cantidad exacta de gas según las especificaciones del fabricante

### ¿Cuánto cuesta?

El costo depende de si hay que reparar una fuga o solo recargar. Una carga de gas R410A (el más común en splits modernos) tiene un costo accesible, pero si la fuga es en un lugar difícil puede requerir más trabajo.

Lo importante: **siempre pedí que reparen la fuga antes de cargar gas**.`,
  },
  {
    slug: "split-vs-ventana-cual-conviene",
    title: "Split vs Ventana: ¿Cuál conviene más?",
    excerpt: "Ventajas y desventajas de cada tipo de equipo para tu hogar o negocio.",
    date: "2026-02-15",
    readTime: "4 min",
    content: `## Split vs Ventana: comparación directa

Ambos tipos de aire acondicionado cumplen la misma función, pero tienen diferencias importantes en precio, instalación, ruido y eficiencia.

### Aire acondicionado Split

**Ventajas:**
- **Silencioso** — el compresor está afuera, la unidad interior es muy silenciosa.
- **Eficiente** — consume menos electricidad para la misma capacidad de frío.
- **Estético** — diseño moderno y discreto en la pared.
- **Mejor distribución del aire** — el flujo es más uniforme.
- **Función frío/calor** — la mayoría incluyen bomba de calor.

**Desventajas:**
- Instalación más compleja (requiere técnico matriculado)
- Precio de compra más alto
- Requiere obra para pasar los caños

### Aire acondicionado de Ventana

**Ventajas:**
- **Precio más bajo** — tanto el equipo como la instalación.
- **Instalación simple** — se coloca en un hueco en la pared o ventana.
- **Una sola unidad** — no hay unidad exterior separada.

**Desventajas:**
- **Ruidoso** — el compresor está adentro del ambiente.
- **Menos eficiente** — consume más para la misma capacidad.
- **Estética** — ocupa espacio visual y bloquea parte de la ventana.
- **Solo frío** — la mayoría no tienen función calor.

### ¿Cuál elegir?

- **Dormitorio o living**: Split, sin dudas. El ruido del ventana no te deja dormir.
- **Negocio o local**: Split si podés hacer la instalación. Ventana si alquilás y no podés hacer obra.
- **Presupuesto ajustado**: El ventana es más barato de entrada, pero a largo plazo el split te ahorra en electricidad.

### ¿Qué capacidad necesito?

Como regla general: **una frigoría por cada 50 kcal/h que necesites**. Para un ambiente de 20m² con techo de 2.5m, necesitás aproximadamente 3.000 frigorías (un split de 3.500W o 12.000 BTU).

Consultá con un técnico para calcular bien según la orientación del ambiente, cantidad de ventanas y aislación.`,
  },
  {
    slug: "preparar-aire-para-verano",
    title: "Cómo preparar tu aire acondicionado para el verano",
    excerpt: "Checklist de mantenimiento para que tu equipo arranque perfecto cuando llegue el calor.",
    date: "2026-02-01",
    readTime: "3 min",
    content: `## Preparar tu aire acondicionado para el verano

Corrientes tiene veranos de 40°C. No querés descubrir que tu aire no funciona el primer día de calor fuerte, cuando todos los técnicos están colapsados.

### Checklist antes del verano

**Lo que podés hacer vos:**

1. **Limpiá los filtros** — sacalos, lavalos con agua y jabón, dejalos secar completos antes de volver a colocarlos.
2. **Limpiá la unidad exterior** — sacá hojas, tierra y objetos que se hayan acumulado alrededor. El condensador necesita circulación de aire libre.
3. **Probá el equipo** — encendelo en modo frío por 15-20 minutos. ¿Enfría bien? ¿Hace ruidos raros? ¿Gotea?
4. **Revisá el control remoto** — cambiá las pilas si hace falta. Un control con pilas bajas manda señal intermitente.

**Lo que necesita un técnico:**

5. **Limpieza profunda del evaporador** — con productos específicos y presión de agua.
6. **Verificación de gas** — medir presión y detectar fugas.
7. **Revisión eléctrica** — cables, capacitor, protector térmico.
8. **Control de drenaje** — que el agua condense y drene correctamente sin obstrucciones.

### ¿Cuándo llamar al técnico?

**Septiembre-octubre** es el momento ideal. En noviembre ya empieza la demanda y los turnos se alargan.

### Tips para que el equipo dure más

- No pongas el termostato en 16°C. Usá **24°C**, que es una temperatura confortable y no fuerza el compresor.
- Cerrá puertas y ventanas cuando está prendido.
- Si tenés cortinas o persianas que bloquean el sol directo, usalas.
- No tapes la unidad exterior ni la pongas en un lugar sin ventilación.`,
  },
  {
    slug: "aire-no-enfria-causas-soluciones",
    title: "¿Por qué tu aire acondicionado no enfría? Causas y soluciones",
    excerpt: "Las razones más comunes por las que un split deja de enfriar y cómo solucionarlas.",
    date: "2026-01-15",
    readTime: "4 min",
    content: `## Tu aire no enfría: posibles causas

Es la consulta más frecuente que recibimos. El equipo prende, tira aire, pero la temperatura no baja. Estas son las causas más comunes, de la más simple a la más compleja.

### 1. Filtros sucios (la más común)

**Síntoma:** enfría poco, el flujo de aire es débil.

**Solución:** sacá los filtros y lavalos. En 9 de cada 10 casos, esto mejora notablemente el rendimiento. Es gratis y lo podés hacer vos.

### 2. Modo incorrecto

**Síntoma:** tira aire pero no es frío.

**Solución:** verificá que el control esté en modo COOL (copo de nieve), no en FAN (ventilador) o HEAT (calor). Parece obvio pero pasa seguido.

### 3. Falta de gas refrigerante

**Síntoma:** enfría cada vez menos, se forma hielo en los caños.

**Solución:** necesitás un técnico que detecte la fuga, la repare y recargue el gas.

### 4. Capacitor dañado

**Síntoma:** la unidad exterior no arranca o arranca y se para enseguida.

**Solución:** el capacitor es un componente eléctrico que se desgasta. Reemplazarlo es una reparación rápida y económica.

### 5. Compresor con problemas

**Síntoma:** la unidad exterior hace ruido pero no enfría nada. El compresor vibra pero no comprime.

**Solución:** puede ser un problema eléctrico del compresor o mecánico. Es la reparación más costosa, y en equipos viejos a veces conviene más reemplazar el equipo.

### 6. Equipo subdimensionado

**Síntoma:** enfría pero no llega a la temperatura deseada, especialmente en días de mucho calor.

**Solución:** si el equipo es chico para el ambiente, no hay reparación posible. Necesitás un equipo de mayor capacidad o complementar con otro.

### ¿Cuándo llamar al técnico?

Si limpiaste los filtros, verificaste el modo del control y el equipo sigue sin enfriar bien, llamá a un técnico. No intentes abrir la unidad interior ni manipular el gas refrigerante — es peligroso y podés dañar el equipo.`,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
