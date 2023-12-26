import { Storage } from "@google-cloud/storage";

const storage = new Storage();

const bucket = storage.bucket("rarebox_files");

export const uploadFileToGCS = (filename, data, contentType) => {
	return new Promise(async (resolve, reject) => {
		const file = bucket.file(`vendor_form_uploads/${filename}`);
		console.log(bucket);
		const stream = file.createWriteStream({
			metadata: {
				contentType,
				cacheControl: "no-cache",
			},
			// public:true,
			resumable: false,
		});
		stream.on("error", (err) => {
			console.log("UPLOAD_ERROR");
			console.log(err);
			reject("Error");
		});
		stream.on("finish", () => {
			const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;
			// const publicUrl = `${bucket.baseUrl}/${filename}`;
			resolve({ name: filename, publicUrl: publicUrl });
		});
		stream.end(data);
	});
};
export const uploadSupplierFileToGCS = (filename, data, contentType) => {
	return new Promise(async (resolve, reject) => {
		const file = bucket.file(`supplier_form_uploads/${filename}`);
		// console.log(file);
		const stream = file.createWriteStream({
			metadata: {
				contentType,
				cacheControl: "no-cache",
			},
			// public:true,
			resumable: false,
		});
		stream.on("error", (err) => {
			console.log("UPLOAD_ERROR");
			console.log(err);
			reject("Error");
		});
		stream.on("finish", () => {
			const publicUrl = `https://storage.googleapis.com/${bucket.name}/supplier_form_uploads/${filename}`;
			// const publicUrl = `${bucket.baseUrl}/${filename}`;
			resolve({ name: filename, publicUrl: publicUrl });
		});
		stream.end(data);
	});
};
