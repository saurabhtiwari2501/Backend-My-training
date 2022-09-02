const axios = require("axios")



let createMemes = async function (req, res) {
    try {

        let meme = req.query.template_id
        let texta = req.query.text0
        let textb = req.query.text1

        let options = {
            method: "post",
            url: `http://api.imgflip.com/caption_image?template_id=${meme}&text0=${texta}&text1=${textb}&username=chewie12345&password=meme@123`
        }

        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg: "server error" })
    }

}


module.exports.createMemes = createMemes

