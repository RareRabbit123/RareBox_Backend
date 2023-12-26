import bigqueryClient from "../../config/bigqueryConfig.js";




const dataset = bigqueryClient.dataset("Rarebox_Backend");


const BusinessPlTable= dataset.table("Item_target");


export const getTargetsById = async(id) =>  {

let query;
 query=`SELECT * FROM \`adroit-standard-379209.Rarebox_Backend.Item_target\` WHERE id = \"${id}\"`
// else  query= `SELECT * FROM \`adroit-standard-379209.Rarebox_Backend.Item_target\``

    const options = {
      configuration: {
        query: {
          query,
          useLegacySql: false,
        },
      },
    };
    // Make API request.
    const response = await bigqueryClient.createJob(options);
    const job = response[0];
    const [rows]= await job.getQueryResults(job)
    return rows;
    
  }



export default BusinessPlTable;





