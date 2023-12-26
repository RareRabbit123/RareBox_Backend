import bigqueryClient from "../../config/bigqueryConfig.js";


// const TableObjectHeader = {
//       "tableReference": {
//         "datasetId": "Rarebox_Backend",
//         "tableId": "test",
//       }
//     }

const dataset = bigqueryClient.dataset("lucent");


const vendorTable= dataset.table("customer_info");


export const allCustomerInfo = async(req,res) =>  {

let   query= `SELECT * FROM \`adroit-standard-379209.lucent.customer_info\``

    const options = {
      configuration: {
        query: {
          query,
          useLegacySql: false,
        },
      },
    };
    
    // Make API request.
    const [response] = await bigqueryClient.query(query);
    return res.status(200).json(response);
    
  }
export const InsertData = async(req,res) =>  {

  const body =req.body;

  vendorTable.insert(body,function(err, response) {
	  if(err) return res.status(500).json(err);
      // else return res.status(200).json(response);

    return res.status(200).json(response);

})
	
    // // Make API request.
    // const [response] = await bigqueryClient.query(query);
    // return res.status(200).json(response);
    
  }



export default vendorTable;





