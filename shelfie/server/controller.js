module.exports={
    read: (req,res)=>{
        const dbInstance = req.app.get('db');
        console.log(req.body)
        dbInstance.get_inventory()
        .then( (products) => res.status(200).send(products) )
        .catch( (e) =>{console.log(e); res.status(500).send() });
    }
}