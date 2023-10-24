
# Deuda técnica
Es la falta e calidad en el código, que genera deuda que repercutirá en costos futuros
- Falta de calidad en aspectos de nuestro código
- Falta de calidad en el proceso de software, como pruebas, documentación, etc.

## Esquema de deuda técnica

### Deuda imprudente
El desarrollador actua de forma conciente e imprudente
"No hay tiempo, sólo coìa y pega eso de nuevo"


### Deuda imprudente e inadvertida
La deuda más peligrosa
Se genera por el desconocimiento o falta de experiencia
"¿Qué son patrones de diseño?"

### Deuda prudente y deliberada
Sabemos que tenemos la deuda y que existe
Si la deuda no se paga a tiempo, más intereses se pagarán después
"Tenemos que entregar rápido, ya refactorizaremos"

### Deuda prudente e inadvertida
Cuando no se tiene todo el panorama del proyecto
Vemos la deuda cuando ya se empieza a codificar el sistema
"Ahora sabemos cómo lo deberiamos haber hecho"

Caer en la deuda técnica es normal y a menudo es inevitable. 

# Refactorización
La deuda técnica se paga con la refactorización. 
La refactorización es un proceso que tiene como objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios.
Usualmente, para que una refactorización fuerte tenga el objetivo esperado, es imprescindible contar con pruebas automáticas.
Sin pruebas automáticas y sin buenas prácticas, caemos en el famoso "Si funciona, no lo toques"

- La mala calidad en el software la acaba pagando o asumiendo alguien. Ya sea el cliente, el proveedor, o los desarrolladores.

# Clean code

- Código limpio es aquel que se ha escrito con la intención de que otra persona (o tú del futuro) lo entienda.
- Programar es el arte de decirle a otro humano lo que quieres que la computadora haga
- "El buen código parece estar escrito por alguien a quine le importa" Michael Feathers

- Nombres pronunciables y expresivos
- Nombres según el tipo de dato

### Arreglos
- Nombre en plural. Ej. lista de nombres de frutas debería llamarse "fruitNames"
### Booleanos
- Uso de prefijos como is, has, can...
- Evitar negación del valor. Ej. "notEmpty"
- Ej. isOpen, canWrite, hasFruit, isActive, hasValues, isEmpty, ...
### Números
- No usar sólo el nombre de la propiedad. Ej. fruits, cars, ...
- Ej. maxFruits, minFruits, totalFruits, totalCars, ...
### Funciones
- Deben representar acciones usando el verbo de la acción y el sustantivo. Debe expresar lo que hace ignorando su implementación.
- Malos ejs. createUserIfNotExitsts(), updateUserIfNotEmpty(), sendEmailIfFieldsValid()
- Buenos ejs. createUser(), updateUser(), sendEmail()
### Clases
- El nombre es lo más importante de la clase
- Nombres formados por frases de sustantivo o sustantivos
- No deben ser muy genéricos ni muy específico
El nombre debería responder estas tres preguntas:
1. ¿Qué exactamente hace la clase?
2. ¿Cómo exactamente esta clase realiza cierta tarea?
3. ¿Hay algo específico sobre su ubicación?
Estructura recomendada de una clase:
- Comenzar con la lista de propiedades
1. Propiedades estáticas
2. Propiedades públicas de último
- Métodos
1. Empezando por los constructores estáticos
2. Luego el constructor
3. Seguidamente métodos estáticos
4. Métodos privados después
5. Resto de métodos de instancia ordenados de mayor a menos importancia
6. Getters y setters al final
### Funciones
- Las funciones deberían ejecutar una única tarea
- Se recomienda limitar los parámetros a 3. Si se necesitan más argumentos, mejor usar un objeto o una interfaz
- Simplicidad es fundamental
- Deben tener un tamaño reducido
- Funciones de una sola línea sin causar complejidad
- Menos de 20 líneas de código aunque no es obligatorio
- Evitar uso del "else"
- Priorizar el uso de la condicioinal ternaria
### Comentarios
- Escribir comentarios cuando sólo sea muy necesario, por ejemplo una solución compleja o un hack sin explicación o el uso de un recurso externo
- Los comentarios deberían ser la excepción, no la regla.
- "No comentes el código mal escrito, reescribelo" Brian Kernighan

## DRY
Don't Repeat Yourself
- Simplemente es evitar tener duplicidad de código
- Simplifica pruebas
- Ayuda a centralizar procesos

## Uniformidad en el proyecto
- Soluciones similares a problemas similares
- El código, archivos y carpetas deben seguir la misma estructura
- La identación debería ser uniforme y seguir las líneas del lenguaje, equipo, etc.

# STUPID
6 code smells que debemos evitar

## Singleton: patrón singleton
Pros
- Garantiza la unica instnace de la clase a lo largo de toda la aplicación
Cons
- Vive en el contexto global
- Puede ser modificado por cualquiera y en cualquier punto de la aplicación
- No es rastreable
- Difícil de testear debido a su ubicación

## Tight Coupling: alto acoplamiento y baja cohesión
**Lo ideal es tener bajo acoplamiento y alta cohesión**
### Alto acoplamiento 
- Se refiere a cuán relacionadas o dependientes son dos clases o módulos entre sí
- En bajo acoplamiento, cambiar algo importante en una clase no debería afectar otra
- En alto acoplamiento, dificultaría el cambio y mantenimiento de su código dado que las clases están muy unidas. Hacer un cambio podría requerir una renovación completo del sistema
Cons
- Un cambio en un módulo por lo general provoca un efecto domino de los cambios en otros módulos
- El ensamblaje de módulos puede requerir más esfuerzo o tiempo debido a la mayor dependencia entre módulos
- Un módulo en particular puede ser más difícil de reutilizar y/o probar porque se deben incluir módulos dependientes
"Queremos diseñar componentes que sean auto-contenidos, auto suficientes e independientes. Con un objetivo y un propósito bien definido"
### Cohesión
- La cohesión se refiere a lo que la clase o módulo puede hacer
- La baja cohesión significa que la clase realiza una gran varidad de acciones: es amplica, no se enfoca en lo que debe hacer
- Alta cohesión significa que la clase se enfoca en lo que debería esta haciendo, sus acciones son relacionadas a la intención de la clase

## Untestability: código no probable (unit test)
**Debemos tener en mente las pruebas desde la creación del código**
- Código que es difícil de testear
- Código con muchas dependencias no inyectadas
- Dependencias en el contexto global (tipo singleton)

## Premature optimization: optimizaciones prematuras
- Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es más importante en una aplicación
- No debemos anticiparnos a los requisitos y desarrollar abstracciones innecesarias que puedan añadir complejidad accidental
Complejidad accidental: Cuando implementamos una solución compleja a la mínima indispensable

Complejidad esencial: La complejidad es inherente al problema
- Debe hacer un balance entre las dos complejidades

## Indescritive Naming: nombres poco descriptivos
- Nombres de variables, clases o funciones mal nombradas
- Nombres muy genéricos o muy específicos

## Duplication: duplicidad de código, no aplicar el concepto DRY
### Duplicidad Real
- Código es identico y cumple la misma función
- Un cambio implicaría actualizar todo el código idéntico en varios lugares
- Imcrementa la posibilidad de error humano
- Mayor cantidad de pruebas innecesarias
### Duplicidad Accidental
- Código luce similar pero cumple funciones distintas
- Cuando hay un cambio, sólo hay que modificar en un sólo lugar
- Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones

# Otros Code Smelss
## Inflación
- Métodos de más de 10 líneas pueden ser complejos: Podemos cortar el método en pequeños submetodos
- El rendimiento se ve un poco afectado por los llamados a varios métodos, pero este impacto es insignificante
- Clases muy grandes: A medida que los programas crecen, las clases se inflan
- Obsesión primitiva: Uso de primitivos en lugar de objetos. Muchas veces es mejor crear una clase nueva para manejar datos, es mejor que usar muchas variables primitivas
- Lista larga de parámetros: Más de 3 o 4 argumentos en un método

## Acopladores
Todos los olores de estre grupo contribuyen al acoplamiento excesivo entre clases o muestran lo que sucede si el acoplamiento se reemplaza por una delegación excesiva
- Feature envy: Un método accede más a los datos de otro método que a sus propios datos. Si el módulo usa mucho otro módulo, podríamos cambiarlo de lugar.
- Intimidad inaproppiada: Cuando una clase usa campos o métodos internos de otra clase. Si las clases estan muy juntas hay problemas, las buenas clases deberían pasar lo menos posible con otras clases.
- Cadena de mensajes: Cuando una función o módulo llama a muchos otros módulos. Tratar de eliminar los llamados execesivos reduciendo las dependencias entre módulos
- The Middleman: Si una clase realiza sólo la acción de delegar trabajo a otra clase. Puede ser resultado de eliminación excesiva de cadenas de mensajes. 

# Principios SOLID
Los principios SOLID nos indican cómo organizar nuestras funcinoes y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados.
- Los principios son recomendaciones, no reglas
- Violentar un principio debería ser la excepción, no la norma.
- No esta enfocado sólo a POO

## S – Single Responsibility Principle: Responsabilidad única (SRP)
"Nunca debería haber más de un motivo por el cual cambiar una clase o módulo" Robert C. Martin
Las clases y módulos se debe enfocar en realizar una serie de procesos estrechamente relacionados entre si
### Detectar violaciones de SRP
- Nombres de clases y módulos demasiado genéricos
- Cambios en el código suelen afectar la clase o módulo
- La clase involucra múltpiles capas. Ej. capa de almacenamiento, capa de bd, capa de ui, etc. Cuando hay muchas interacciones entre diferentes capas.
- Número elevado de importaciones
- Cantidad elevada de métodos públicos, esto significa que la clase hace muchas cosas
- Excesivo número de líneas de código. Es relativo pero es notable

## O – Open/Closed Principle: Abierto y cerrado (OCP)
Es un principio que depende mucho del contexto
Establece que las entidades de software (clases, módulos, métodos, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación.
Ej. Si tenemos un método que crea un archivo "hola.txt" y luego nos piden cambiarlos a "adios.txt". Si tenemos que abrir o modificar el módulo, se viola este principio. Nuestro método debería tener un parámetro que permita este cambio.
- El principio de abierto-cerrado se puede lograr mediante la herencia o patrones de diseño de composición como el patrón de estrategia
- Cuando se usa una libreria de terceros se recomienda usar una clase adaptadora para que en caso de que la librería de terceros cambie, sólo se necesitaría modificar esta clase
### Detectar violaciones de OCP
- Cambios normalmente afectan nuestra clase o módulo
- Cuando una clase o módulo afecta muchas capas (presentación, almacenamiento, etc.)
- Entre código un poco más óptimo o más fácil de leer, escoger la readability
 
## L – Liskov Substitution Principle: Sustitución de Liskov (LSP)
"Siendo U un subtipo de T, cualquier instancia de T debería poder ser sustituida por cualquier instancia de U sin altrerar las propiedades del sistema"
- Si una clase A es extendida por una clase B, deberíamos ser capaces de sustituir cualquier instancia de A por cualquier objeto de B sin que el sistema falle
 
## I – Interface Segregation Principle: Segregación de interfaz (ISP)
"Los clientes no deberían estar oblicagos a depender de interfaces que no utilicen" Robert C. Martin
### Detectar violaciones de OCP
- Si las interfaces que diseñamos nos obligan a violar los principios de responsabilidad única y Sustitución de Liskov
 
## D – Dependency Inversion Principle: Inversión de dependencias (DIP)
- Los módulos de alto nivel no deberían depender de módulo de bajo nivel (componentes de capas superiores no deben depender de componentes menos importantes). Ej. el frontend no debería dar la reglas de negocio
Los componentes más importantes son aquellos centrados en resolver el problema subyacente al negocio, es decir, la capa de dominio.
Los menos importantes son los que están próximos a la infraestructura, es decir, aquellos relacionados con la UI, la persistencia, la comunicación con API externas, etc. (Revisar arquitectura hexagonal)
- Ambos deberían depender de abstracciones. Clases abstractas o interfaces
Las reglas de negocio o capa de dominio debe depender de abstracciones ya que aumenta la tolerancia al cambio. Cada cambio en un componente abstracto implica un cambio en su implementación.
- Las abstracciones no deberían depender de detalles
- Los detalles deberían depender de abstracciones
- Aplicar este principio ayuda fuertemente al principio de responsabilidad única (SRP) y al testing
### Inyección de dependencias
Dependencia en programación significa que un módulo o componente requiere de otro para poder realuzar su trabajo.
En algún momento nuestro programa o aplicación llegará a estar formado por muchos módulos. Cuando esto pase, es cuando debemos usar inyección de dependencias.



