import express, { Request, Response } from 'express';
import next from 'next';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.all('*', (req: Request, res: Response) => handle(req, res));

	server.listen(port, (err: any) => {
		if (err) throw err;
		// tslint:disable-next-line:no-console
		console.log(`🚀 Ready on http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
	});
});
