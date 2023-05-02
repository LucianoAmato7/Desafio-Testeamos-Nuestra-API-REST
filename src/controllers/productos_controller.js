import productos_repository from "../repository/productos_repository.js"

export const GetProds_controller = async (req, res) => {
  const productos = await productos_repository.find();
  res.json(productos);
};

export const CreateProd_controller = async (req, res) => {
  try{
    const data = req.body
    const addedProd = await productos_repository.save(data)
    return res.json(addedProd)
  }catch(err){
    console.log(err);
  }
}