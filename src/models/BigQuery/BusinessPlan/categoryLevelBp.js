import bigqueryClient from "../../../config/bigqueryConfig.js";


const dataset = bigqueryClient.dataset("Rarebox_Backend");


const CategoryLevelBpTable= dataset.table("category_level_bp");


export const getAllBusinessPlans = async(id) =>  {

let query;
if(id) query=`SELECT * FROM \`adroit-standard-379209.Rarebox_Backend.category_level_bp\` WHERE id = \"${id}\"`
else  query= `SELECT * FROM \`adroit-standard-379209.Rarebox_Backend.category_level_bp\``

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



export default CategoryLevelBpTable;





