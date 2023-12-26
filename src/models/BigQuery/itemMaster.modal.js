// import { BigQuery } from "@google-cloud/bigquery";
import bigqueryClient from "../../config/bigqueryConfig.js";


// const TableObjectHeader = {
//       "tableReference": {
//         "datasetId": "Rarebox_Backend",
//         "tableId": "test",
//       }
//     }



const dataset = bigqueryClient.dataset("item_master");

const ItemMasterTable= dataset.table("item_master");



export const categoryBydivision = async(division,brand) =>  {
  // console.log(division)
    const options = {
      configuration: {
        query: {
          query: `SELECT distinct(DEPARTMENT) FROM \`adroit-standard-379209.item_master.item_master\` WHERE DIVISION ="${division}" and BRAND_CNAME1 =\"${brand}\" `,
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

export const subCategoryByDivisionDepartment = async(division,department,brand) =>  {
    const options = {
      configuration: {
        query: {
          query: `SELECT distinct(SUBCATE_DES3) FROM \`adroit-standard-379209.item_master.item_master\` WHERE BRAND_CNAME1 =\"${brand}\" and DIVISION =\"${division}\" and DEPARTMENT =\"${department}\"`,
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
export const mrpBySubCategory = async(division,department,brand,subCategory) =>  {
    const options = {
      configuration: {
        query: {
          query: `WITH CTE AS (SELECT MRP,SEASON_ATT6,SUBCATE_DES3 FROM \`adroit-standard-379209.item_master.item_master\` WHERE DIVISION="${division}" and DEPARTMENT="${department}" and SUBCATE_DES3=${subCategory} and SEASON_ATT6="SS-23" BRAND_CNAME1="${brand}" )
          SELECT MRP_, SEASON, BILL_QUANTITY,REALISED_VALUE  FROM (SELECT MRP AS MRP_ , SEASON, SUM(BILL_QUANTITY)BILL_QUANTITY,SUM(REALISED_VALUE)REALISED_VALUE  FROM \`adroit-standard-379209.Ginesys_Database_.Ginesys_Database_Sale\` GROUP BY 1,2)SALE 
          INNER JOIN CTE ON SALE.SEASON =CTE.SEASON_ATT6
          GROUP BY 1,2,3,4`,
          useLegacySql: false,
        },
        // labels: {'example-label': 'example-value'},
      },
    };
    // Make API request.
    const response = await bigqueryClient.createJob(options);
    const job = response[0];
    const [rows]= await job.getQueryResults(job)
    console.log(rows)
    return rows;
    
  }



export default ItemMasterTable;





