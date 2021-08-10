const express = require('express');
const morgan = require('morgan');
const app= express();
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser');

sequelize.sync();


app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan((tokens,req,res)=>{
    const today = new Date();

    return [
    '[ ',today.toLocaleDateString('en-US'),' ] ',
    tokens['response-time'](req, res)+' ms ',
    '"',tokens.method(req, res),' ',
    tokens.url(req, res),'" ',
    tokens.status(req, res),
    ].join('')
}, {
    skip: (req, res)=> {
        return req.method === "OPTIONS"
    }
}));

const initModels = require("./models/init-models");
const models = initModels(sequelize);

sequelize.query('SET NAMES utf8;');

app.post('/add/data', (req,res) => {
    const{name:_name, email:_email} = req.body;
    console.log(_name + _email);

    models.sample1s.create({
        name : req.body.name,
        email : req.body.email
    })
    .then (result =>{
        res.send(result)
    })
    .catch( err => {
        console.log(err)
        throw err;
    })
})

app.get('/get/data/notice', (req,res) => {
    models.notice.findAll()
    .then(result => {res.send(result)})
    .catch(err => {throw err})
})

app.get('/get/data/members', (req,res) => {
    models.members.findAll()
    .then(result => {res.send(result)})
    .catch(err => {throw err})
})

app.get('/get/data/mvp_total', (req,res) => {
    models.mvp_total.findAll({})
    .then(result => {res.send(result)})
    .catch(err => {throw err})
})

app.post('/get/keywordData', (req,res) => {
    models.sample1s.findAll({
        where: {[Op.or]: [{name: req.body.name}, {email : req.body.email}]}
    })
    .then (result => {res.send(result)})
    .catch(err => {throw err})
})

app.post('/modify/data', (req, res) => {
    models.sample1s.update({name: req.body.modify.newName}, {
        where : {id:req.body.modify.id}
    })
    .then (result => {res. send(result)})
    .catch(err => {throw err})
})

app.post('/modify/multiData', (req, res) => {
    models.sample1s.update({name: req.body.modify.newName}, {
        where : {[Op.or]: [{id: req.body.modify.targetId}, {name : req.body.modify.targetName}]}
    })
    .then(result => {res.send(result)})
    .catch(err => {throw err})
})

app.post('/delete/data', (req, res) => {
    models.sample1s.destroy({
        where: {id: req.body.delete.id}
    })
    .then(res.sendStatus(200))
    .catch(err => {throw err})
})

app.post('/test/join', (req, res) => {
    const _id = req.body.id;
    models.members.findAll({
        attributes:['U_NAME', 'U_CODE', 'U_SALT', 'U_PW', 'U_PIN', ['U_WALLET', 'test']],
        include: [
            {
                model: models.mvp_total,
                attributes: ['U_MVP'],
            }
        ],
        where: Sequelize.literal(`members.U_ID = BINARY('${_id}')`)
    })
    .then(result => {
        result = result.map(value => {
            const res = {}; 
            Object.assign(res, value.dataValues);
            
            res.U_MVP = res.mvp_total.U_MVP;
            delete res.mvp_total; 

            return res; 
        });
        res.json(result)
    })
    .catch(err => {throw err})
})

// app.post('/test/filtered-history', (req, res) => {       // point.js/filtered-history router
//     const {id:_id, start:_start, end:_end} = req.body;

//     models.mvp_decr.findAll({
//         attributes:['C_CODE', [Sequelize.literal('date_format(CREA_DT, \'%y-%m-%d %T\''),'CREA_DT']],
//         include: [
//             {
//                 model: models.mvp_code_mst,
//                 attributes: ['C_NAME', 'AMOUNT'],
//             },
//             {
//                 model: models.brand_mst,
//                 attributes: ['BRD_NAME']
//             },
//             {
//                 model: models.prdt_mst,
//                 attributes: [['PDT_NAME', 'CORE']],
//             }
//         ],
//         where: Sequelize.literal(`mvp_decr.U_ID = BINARY('${_id}')`),
//         date: {
//             [Op.between] : [_start, _end],
//         },
//         order: 'CREA_DT desc'
//     })
//     .then(result => {
        
//         result = result.map(value => {
//             const res = {}; 
//             Object.assign(res, value);
            
//             res.U_MVP = res.mvp_total.U_MVP;
//             delete res.mvp_total; 

//             return res; 
//         });
//         res.send(result)
//     })
//     .catch(err => {throw err})
// })

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})