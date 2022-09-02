let axios = require("axios")

let weatherCondition = async function (req, res) {

    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityByArrays = []
        let appid = "1fad3a8f18b5d193589ecaaa87e71011"


        for (i = 0; i < cities.length; i++) {

            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=1fad3a8f18b5d193589ecaaa87e71011
            `)
            console.log(resp.data.main.temp)

            obj.temp = resp.data.main.temp
            cityByArrays.push(obj)

        }

        let sorted = cityByArrays.sort(function (a, b) { return a.temp - b.temp })
        console.log(sorted)
        res.status(200).send({ status: true, data: sorted })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg: "server error" })
    }
}



module.exports.weatherCondition = weatherCondition