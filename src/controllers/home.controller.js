let _homeService = null;

class HomeController{
    //la desestructuracion en los parametros del constructor lo hace awilix
    //debe coincidir con la linea HomeService: asClass(HomeService).singleton()
    //de la creacion del container
    constructor({ HomeService }){
        _homeService = HomeService;
    }

    index(req, res){
        return res.send(_homeService.index());
    }
}

module.exports = HomeController;