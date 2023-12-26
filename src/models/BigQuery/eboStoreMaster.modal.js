// import { BigQuery } from "@google-cloud/bigquery";
import bigqueryClient from "../../config/bigqueryConfig.js";


// const TableObjectHeader = {
//       "tableReference": {
//         "datasetId": "Rarebox_Backend",
//         "tableId": "test",
//       }
//     }



const dataset = bigqueryClient.dataset("Wildfox");


const StoreMasterTable= dataset.table("ebo_store_master_copy");


export const getEBOStoresByRegion = async(region) =>  {

    const options = {
      configuration: {
        query: {
          query: `SELECT * FROM \`adroit-standard-379209.Wildfox.ebo_store_master_copy\` WHERE region= \'${region}\'`,
          useLegacySql: false,
        },
        // labels: {'example-label': 'example-value'},
      },
    };
    // Make API request.
    const response = await bigqueryClient.createJob(options);
    const job = response[0];
    const [rows]= await job.getQueryResults(job)
    return rows;
    
  }
export const getEBOStoresByBrand = async(brand) =>  {
  console.log(brand)
    const options = {
      configuration: {
        query: {
          query: `SELECT * FROM \`adroit-standard-379209.Wildfox.ebo_store_master_copy\` WHERE brand =\"${brand}\"`,
          useLegacySql: false,
        },
        // labels: {'example-label': 'example-value'},
      },
    };
    // Make API request.
    const response = await bigqueryClient.createJob(options);
    const job = response[0];
    const [rows]= await job.getQueryResults(job)
    return rows;
    
  }



export default StoreMasterTable;





