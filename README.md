# vue-3-crud

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Component Design
<div align="center"><img src="https://user-images.githubusercontent.com/28024862/167336142-020a5042-bff0-4216-8251-c2cd48a97e65.png"></div>

## Pages Routes
| **Ruta**  |  **image** |   
|---|---|
|  **/explorers** <br> Toda la información de todos los explorers (si selecciona uno y da clic en editar lo llevará a la página para editar/eliminar). |   <img src="https://user-images.githubusercontent.com/28024862/167336856-d066b96b-14d2-42eb-9cdf-e31c19f02539.png">  |
|  **/add** <br> Aquí puedes dar de alta nuevos explorers. |   <img src="https://user-images.githubusercontent.com/28024862/167337964-44b7a79e-d4fe-4b70-ae22-76121645f3bf.png">  |
|  **/explorers/:id** <br>  Aquí puede editar la misión del explorer o eliminarlo.|  <img src="https://user-images.githubusercontent.com/28024862/167337008-743288d8-26a1-4399-ae44-1af3a6298b75.png">   |
|  **/missionscommander/** <br> Toda la información de todos los mission commander (si selecciona una y da clic en editar lo llevará a la página para editar/eliminar). |   <img src="https://user-images.githubusercontent.com/28024862/167337512-3f55294c-0b70-4aeb-af7c-ac1b366e4e61.png">  |
|  **/addmc** <br> Aquí puedes dar de alta nuevos mission commander. |   <img src="https://user-images.githubusercontent.com/28024862/167338063-178da61c-429f-4647-8e09-3d7a60e85431.png">  |
|  **/missionscommander/:id** <br> Aquí puede editar el main stack del mission commander o eliminarlo. |   <img src="https://user-images.githubusercontent.com/28024862/167337675-90141869-5838-4121-b432-38319cbeb345.png">  |
|  **/missions** <br> Toda la información de todas las misiones (si selecciona una y da clic en editar lo llevará a la página para editar/eliminar).  |   <img src="https://user-images.githubusercontent.com/28024862/167337764-c239372d-9d68-41e2-8834-d52a383c6514.png">  |
|  **/addmission** <br> Aquí puedes dar de alta nuevas mission. |   <img src="https://user-images.githubusercontent.com/28024862/167338128-69b53aeb-496a-4d75-9bed-226e28296c4d.png">  |
|  **/missions/:id** <br> Aquí puede editar la cantidad de inscripciones a una misión o eliminarla. |   <img src="https://user-images.githubusercontent.com/28024862/167337838-c1a5bca2-67cc-4dfd-82b1-0dad133d42aa.png">  |

### About
Este proyecto de vue se comunica con una API a la cual accede por la ruta "http://localhost:3000" por medio de axios. 
