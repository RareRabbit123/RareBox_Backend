import bigqueryClient from "../../config/bigqueryConfig.js";

// const TableObjectHeader = {
//       "tableReference": {
//         "datasetId": "Rarebox_Backend",
//         "tableId": "test",
//       }
//     }

const dataset = bigqueryClient.dataset("Rarebox_Backend");

const supplierTable = dataset.table("supplier_details");

export const allSuppliers = async (id) => {
	let query;
	if (id) query = `SELECT * FROM \`adroit-standard-379209.Rarebox_Backend.supplier_details\` WHERE id = \"${id}\"`;
	else query = `SELECT * FROM \`adroit-standard-379209.Rarebox_Backend.supplier_details\``;

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
	const [rows] = await job.getQueryResults(job);
	return rows;
};

export default supplierTable;
