import bigqueryClient from "../../../config/bigqueryConfig.js";


// const TableObjectHeader = {
//       "tableReference": {
//         "datasetId": "Rarebox_Backend",
//         "tableId": "test",
//       }
//     }

const dataset = bigqueryClient.dataset("Rarebox_Backend");


const SeasonLevelBpTable= dataset.table("season_level_bp");


export const getFromSeasonLevelBP = async(season ,channel) =>  {

    let query;
    if(season !== "" && channel !== "") query=`SELECT * FROM \`adroit-standard-379209.Rarebox_Backend.season_level_bp\` WHERE season = \"${season}\" and channel = \"${channel}\"`
    if(season !== "" && channel === "") query=`SELECT * FROM \`adroit-standard-379209.Rarebox_Backend.season_level_bp\` WHERE season = \"${season}\"`
    if(season === "" && channel !== "") query=`SELECT * FROM \`adroit-standard-379209.Rarebox_Backend.season_level_bp\` WHERE channel = \"${channel}\"`

    if(season === "" && channel === "") query= `SELECT * FROM \`adroit-standard-379209.Rarebox_Backend.season_level_bp\``

    // Make API request.
    const [response] = await bigqueryClient.query(query);
    return response;
    
  }



export default SeasonLevelBpTable;





