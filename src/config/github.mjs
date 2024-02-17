import dotenv from 'dotenv';
import calculate from './metriquesPrCalculations.mjs';
//import { request, gql } from 'graphql-request';
import { request, gql, GraphQLClient, rawRequest } from 'graphql-request'

const dotEnv = dotenv.config();

const query = gql`
        query {
            repository(owner: "${process.env.API_OWNER}", name: "${process.env.API_NAME}") {
                pullRequest(number: 22) {
                    commits(first: 10) {
                      edges {
                        node {
                          commit {
                            oid
                            message
                          }
                        }
                      }
                    }
                    comments(first: 10) {
                      edges {
                        node {
                          body
                          author {
                            login
                          }
                        }
                      }
                    }
                    reviews(first: 10) {
                      edges {
                        node {
                          state
                        }
                      }
                    }
                  }
                }
              }
      `;


class GitHubConnection {
    constructor() {

        this.headers = {
            Authorization: `Bearer ${process.env.API_KEY}`,
        };
        this.apiUrl = 'https://api.github.com/graphql';

    }

    async getBoard() {
        
        // Get le title du projet #6 (notre projet)
        const query = gql`
        query {
            viewer {
                login
                projectV2(number: 6) {
                    title
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

    async getPRCycleTime() {
        const query = gql`
        query {
        repository(owner: "${process.env.API_OWNER}", name: "${process.env.API_NAME}") {
            pullRequests(last: 10) {
              edges {
                node {
                  number
                  mergeable
                  createdAt
                  mergedAt
                }
              }
            }
          }
        }
      `;
        return request(this.apiUrl, query, null, this.headers)
            .then(data => {
                // Process or manipulate the data if needed
                let responseJSON = JSON.stringify(data);
                calculate.calculatePRCycleTime(data, 23);
                return data;
            })
            .catch(error => {
                console.error('Error:', error.response.data);
                throw error;
            });
    }

    async getPRCommitsMes() {
        return rawRequest(this.apiUrl, query, null, this.headers)
            .then(data => {
                
                // Calculate number of commits message
                let responseJSON = JSON.stringify(data);
                calculate.calaculatePRCommitsMes(data);
                return data;

            })
            .catch(error => {
                console.error('Error:', error.response.data);
                throw error;
            }); 
    }


    async getPRCommitsCount() {
        return rawRequest(this.apiUrl, query, null, this.headers)
            .then(data => {
                // Calculate number of commits messages
                let responseJSON = JSON.stringify(data);
                calculate.calaculatePRCommitsCount(data);
                return data;

            })
            .catch(error => {
                console.error('Error:', error.response.data);
                throw error;
            });
            
    }

    async getPRCommentsCount() {
        return rawRequest(this.apiUrl, query, null, this.headers)
            .then(data => {
                // Calculate number of comments
                let responseJSON = JSON.stringify(data);
                calculate.calaculatePRCommentsCount(data);
                return data;

            })
            .catch(error => {
                console.error('Error:', error.response.data);
                throw error;
            });
            
    }
    
    async getPRReviewsCount() {
        return rawRequest(this.apiUrl, query, null, this.headers)
            .then(data => {
                // Calculate number of reviews
                let responseJSON = JSON.stringify(data);
                calculate.calculatePRReviewsCount(data);
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