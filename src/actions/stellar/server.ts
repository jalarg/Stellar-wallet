import { Server } from "stellar-sdk";

const STELLAR_URL = process.env.STELLAR_HORIZON_URL as string;

const server = new Server(STELLAR_URL);

export default server;
