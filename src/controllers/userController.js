


const basicCode= async function(req, res, next) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    //res.send({ msg: "This is coming from controller (handler)"})
    next()
    }

const mwAssignment = async function(req, res){
    console.log('this is middlewear assignment, yoy can check this')
    res.send({msg:"Middlewear"})
}


module.exports.mwAssignment=mwAssignment


