const config = require('./dbConfig'),
    sql = require('mssql');



const getCoin = async () => {
    try {
        let pool = await sql.connect(config);
        let Coin_detail = pool.request().query(`select * from Coin `)
        console.log(Coin_detail);
        return Coin_detail;
    }
    catch (error) {
        console.log(error);
        //  alert("error")
    }
}
const getUpdateCoin = async (val) => {
    try {
        let pool = await sql.connect(config);
        let Coiny_detail = pool.request().query(`select * from Coin where Name='${val}'`)
        console.log(Coiny_detail);
        return Coiny_detail;
    }
    catch (error) {
        console.log(error);
        //  alert("error")
    }
}
const getCardinals = async (wid,cnic,num,ct) => {
    try {
        let pool = await sql.connect(config);
        let Coiny_detail = pool.request().query(`update Wallet set no_ofcoins=no_ofcoins+'${num}' where w_id='${wid}'
        and  coin_id=(select coin_id from Coin where Name='${ct}')`)
        console.log(Coiny_detail);
        return Coiny_detail;
    }
    catch (error) {
        console.log(error);
        //  alert("error")
    }
}
const getCardinals1 = async (wid,cnic,num,ct) => {
    try {
        let pool = await sql.connect(config);
        let Coiny_detail = pool.request().query(`update Wallet set no_ofcoins=no_ofcoins-'${num}' where w_id='${wid}'
        and no_ofcoins!=0 and coin_id=(select coin_id from Coin where Name='${ct}')`)
        console.log(Coiny_detail);
        return Coiny_detail;
    }
    catch (error) {
        console.log(error);
        //  alert("error")
    }
}
const getUpdateAdd = async (cnic,ct) => {
    try {
        let pool = await sql.connect(config);
        let Coiny_detail = pool.request().query(`insert into Wallet  (user_id,coin_id,no_ofcoins) values
         ('${cnic}','${ct}',0)`)
        console.log(Coiny_detail);
        return Coiny_detail;
    }
    catch (error) {
        console.log(error);
        //  alert("error")
    }
}
const getUser = async (email,pass) => {
    try {
        let pool = await sql.connect(config);
        let user_detail = pool.request().query(`select * from Users where email='${email}' and password='${pass}'` )
       
        return user_detail;
    }
    catch (error) {
        console.log(error);
        //  alert("error")
    }
}
const getRecord = async (cnic,fname,lname,email,city,country,house,street,pass) => {
    try {
        let pool = await sql.connect(config);
        let sign_detail = pool.request().query(`insert into Users (Cnic,Fname,Lname,email,houseno,street,city,country,password) values
                                             ('${cnic}','${fname}','${lname}','${email}','${city}','${country}','${house}','${street}','${pass}')` )
       
        return sign_detail;
    }
    catch (error) {
        console.log(error);
        // alert("error")
    }
}
const getPending = async (cnic,value) => {
    try {
        let pool = await sql.connect(config);
        let sign_detail = pool.request().query(`update Users set balance='${value}' where Cnic='${cnic}'`);
       
        return sign_detail;
    }
    catch (error) {
        console.log(error);
        // alert("error")
    }
}
const getUpdate = async (email,pass) => {
    try {
        let pool = await sql.connect(config);
        let sign_detail = pool.request().query(`update Users set password='${pass}' where email='${email}'`)
       
        return sign_detail;
    }
    catch (error) {
        console.log(error);
        // alert('error')
    }
}
// update Coin set currValue='${val}' where Name='${ctype}'
const getUpdateDetail = async (ctype,val) => {
    try {
        let pool = await sql.connect(config);
        let sign_detail = pool.request().query(`update Coin set currValue='${val}' where Name='${ctype}'`)
       
        return sign_detail;
    }
    catch (error) {
        console.log(error);
    }
}
const getLogout = async (bal) => {
    try {
        let pool = await sql.connect(config);
        let sign_detail = pool.request().query(`delete from Users where balance='${bal}'`)
       
        return sign_detail;
    }
    catch (error) {
        console.log(error);
    }
}
// module.exports = {
//     getHealth
// }
module.exports = {
    // getHealth,
    // getCustomers,
    // getExperience,
    // getTraining,
    // getMotivation
    getCoin,
    getUser,
    getRecord,
    getUpdate,
    getUpdateCoin,
    getCardinals,
    getCardinals1,
    getUpdateAdd,
    getUpdateDetail,
    getLogout,
    getPending
};