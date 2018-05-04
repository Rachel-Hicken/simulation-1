module.exports={
    create: (req,res)=>{
        const dbInstance = req.app.get('db');
        const {name, price, image_url}=req.body;
        // console.log(name, price, image_url);
        dbInstance.create_product([name, price, image_url])
        .then( () => res.status(200).send() )
        .catch( (e) =>{console.log(e); res.status(500).send() });
    },
    read: (req,res)=>{
        const dbInstance = req.app.get('db');
        console.log(req.body)
        dbInstance.get_inventory()
        .then( (products) => res.status(200).send(products) )
        .catch( (e) =>{console.log(e); res.status(500).send() });
    }

}