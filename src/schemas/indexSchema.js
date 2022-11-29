// Es un index de los models que declaramos en el folder de "Schemas"

const models = {
    placeModel: require('./schemas/Place'),
    ticketModel: require('./schemas/Ticket'),  // Reunes y exportas los modelos a seguir
    userModel: require('./schemas/User')
}

module.exports = models;