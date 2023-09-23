const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

async function getAll(req, res) {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        console.log(lists);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists); // we just need the first one (the only one)
    });
}

async function getSingle(req, res) {
    const id = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contacts').find({_id: id});
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]); // we just need the first one (the only one)
    });
}

module.exports = {getAll, getSingle};