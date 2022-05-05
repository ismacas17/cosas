const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5310309739:AAGRzWYg9d1e2poGUrnTflg0tDbmKAhCFmU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    
    switch(msg.text){
        case "/start":
            //CrearUsuario
            //If usuario registrado -> Nada
            bot.sendMessage(chatId, "Hola buenas, no estas registrado\n pulsa en /menu para utilizar el bot.");
            //Si no esta registrado 
            bot.sendMessage(chatId, "¡Hola!Has accedido al Donopop.\nNuestro servicio se basa en poder donar o buscar en función de tus necesidades objetos reutilizables. \nEl objetivo es la disminución de residuos a la hora de la fabricación inicial de un objeto. \nAdemás poder ayudar a cualquier tipo de persona en función de sus necesidades.\nSe ofrecerá también un servicio para las empresas y que puedan reaconidicionar los objetos.\nEl fin principal es la disminución de residuos contaminantes, aumentar reciclaje y ayudar a la gente que lo necesite. \n¡Ayuda al planeta reduciendo residuos con nosotros y mejora la vida de las personas!");
            return;
        case "/menu":
            bot.sendMessage(chatId, "Para subir un articulo pulsa en /donar\nPara añadir una nueba busqueda pulsa en /buscar\nSi quieres registrarte como una empresa pulsa en /soyEmpresa\nSi quieres registrarte como un usuario de necesidades especiales pulsa en /necesidad");
            return;
        case "/donar":
            bot.sendMessage(chatId, "Introduce el nombre del objeto a donar");
            //actualizar usuario a paso1 
            return;
        case "/buscar":
            bot.sendMessage(chatId, "Introduce el nombre del objeto a buscar");
            //actualizar usuario a paso 3
            return;
        case "/soyEmpresa":
            bot.sendMessage(chatId, "Introduce el CIF de la empresa");
            //actualizar usuario a paso 4
            return;
        case "/necesidad":
            bot.sendMessage(chatId, "Introduce tu DNI");
            //actualizar usuario a paso 5           
            return;
        case "/cancelar":
            bot.sendMessage(chatId, "Se ha cancelado el proceso");
            bot.sendMessage(chatId, "Para subir un articulo pulsa en /donar\nPara añadir una nueba busqueda pulsa en /buscar\nSi quieres registrarte como una empresa pulsa en /soyEmpresa\nSi quieres registrarte como un usuario de necesidades especiales pulsa en /necesidad");            //Actualizar el paso del usuario a 0, y salir
            return;
        default:
            let paso ;
            //Buscar usuario en la base si esta en algún paso que no sea 0
            //paso = paso de la busqueda
            switch(paso){
                case 0: 
                    bot.sendMessage(chatId, "Comando no reconocido");
                    return;
                case 1:
                    //Hacer nuevo objeto con nombre de msg.text 
                    //Actualizar objeto a paso 2
                    bot.sendMessage(chatId, "Introducir estado del objeto");
                    return;
                case 2: 
                    //Actualizar user a paso 0 y estado del objeto del msg.text
                    bot.sendMessage(chatId, "Donacion publicada");
                    //Comprobar que existe alguna busqueda de ee objeto
                    //Se hace un select del objeto con el correspondiente nombre
                    //Si encuentra coincidencia, enviar mensaje a los que lobuscan
                    return;
                case 3:
                    //Si no encuentra, muestre
                    bot.sendMessage(chatId, "se ha guardado su busqueda");
                    //Actualizar usuario a paso 0
                    return;
                case 4:
                    bot.sendMessage(chatId, "Se va a revisar su solicitud.");
                    //Actualizar usuario a paso 0
                    return;
                case 5: 
                    bot.sendMessage(chatId, "Se va a revisar su solicitud.");
                    //Actualizar usuario a paso 0
                    return;
            }
            
            return;
    }
});