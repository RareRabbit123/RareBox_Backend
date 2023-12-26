import bigqueryClient from "../../../config/bigqueryConfig.js";


// const TableObjectHeader = {
//       "tableReference": {
//         "datasetId": "Rarebox_Backend",
//         "tableId": "test",
//       }
//     }

const dataset = bigqueryClient.dataset("Rarebox_Backend");


const BrandLevelBpTable= dataset.table("brand_level_bp");


export const getAllBusinessPlans = async(id) =>  {

let query;
if(id) query=`SELECT * FROM \`adroit-standard-379209.Rarebox_Backend.brand_level_bp\` WHERE id = \"${id}\"`
else  query= `SELECT * FROM \`adroit-standard-379209.Rarebox_Backend.brand_level_bp\``

    // const options = {
    //   configuration: {
    //     query: {
    //       query,
    //       useLegacySql: false,
    //     },
    //   },
    // };
    // Make API request.
    const [response] = await bigqueryClient.query(query);
    return res.status(200).json(response);
    
  }



export default BrandLevelBpTable;





