run: run-client run-server

run-client: deps-client
	cd client; npm run build; npm run serve;

run-server: deps-server
	cd server; npm run serve;

dev: dev-client dev-server

dev-client: deps-client
	cd client; npm start;

dev-server: deps-server
	cd server; npm start;

deps-client:
	cd client; npm install;

deps-server:
	cd server; npm install;
