import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5000/",
	header: {
		Accept: "application/json",
	},
});

export const getContentsList = async () => {
	const { data } = await api.get("/contentList");
	return data;
};
