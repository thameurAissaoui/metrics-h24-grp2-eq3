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
        
        // Get first 10 columns
        //  Then get first 10 cards for each columns
        const query = gql`
        query {
            repository(owner: "${process.env.API_OWNER}", name: "${process.env.API_NAME}") {
                projects(search: "Kanban-metrics-h24-grp2-eq3", first: 1) {
                    nodes {
                      name
                      columns(first: 10) {
                        nodes {
                          name
                          cards(first: 10) {
                            nodes {
                              content {
                                ... on Issue {
                                  title
                                  url
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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

    async getPR() {

        // Get first 5 open PR
        const query = gql`
        query {
            repository(owner: "${process.env.API_OWNER}", name: "${process.env.API_NAME}") {
                name
                pullRequests(first: 5, states: OPEN) {
                    nodes {
                      title
                      body
                      url
                    }
                  }
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