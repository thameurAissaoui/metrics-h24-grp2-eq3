import dotenv from 'dotenv';
import { request, gql } from 'graphql-request';

const dotEnv = dotenv.config();


class GitHubConnection {
    constructor() {

        this.headers = {
            Authorization: `Bearer ${process.env.API_KEY}`,
        };
        this.apiUrl = 'https://api.github.com/graphql';

    }

    async getBoard() {
        const query = gql`
        query {
            repository(owner: "${process.env.API_OWNER}", name: "${process.env.API_NAME}") {
                name
              }
          }
      `;

        return request(this.apiUrl, query, null, this.headers)
            .then(data => {
                // Process or manipulate the data if needed
                return data;
            })
            .catch(error => {
                console.error('Error:', error.response.data);
                throw error;
            });
    }

    async testConnection() {
        const query = gql`
        query {
            repository(owner: "${process.env.API_OWNER}", name: "${process.env.API_NAME}") {
                name
              }
          }
      `;

        return request(this.apiUrl, query, null, this.headers)
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error('Error:', error.response.data);
                throw error;
            });
    }

}

const instance = new GitHubConnection();
export default instance;