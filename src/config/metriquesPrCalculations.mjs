class MetriquesPrCalculations {

    async calculatePRCycleTime(data, number){
        for(var i = 0; i<data.repository.pullRequests.edges.length; i++){
            if(number == data.repository.pullRequests.edges[i].node.number){
                const createdAt  = new Date(data.repository.pullRequests.edges[i].node.createdAt); 
                const mergedAt = new Date(data.repository.pullRequests.edges[i].node.mergedAt); 
                const diffTime = mergedAt.getTime() - createdAt.getTime(); 
                const diffDays = Math.floor(Math.abs(diffTime / (1000 * 60)));
                console.log("///////////////////////////////////////////////////////////");
                console.log("Le PR Cycle Time du Pull request numéro: " + number + " est: "  + diffDays + " minutes");
                console.log("///////////////////////////////////////////////////////////");
                return diffDays;
            }  
        }
       
    }

    async calculatePRReviewsCount(data){
        console.log("///////////////////////////////////////////////////////////");
        console.log("Le Nombre de Review(s) dans le PR 22 est : " + data.data.repository.pullRequest.reviews.edges.length);
        for(var i = 0; i<data.data.repository.pullRequest.reviews.edges.length; i++){
            console.log("///////////////////////////////////////////////////////////");
            console.log("Les review(s) : " +  data.data.repository.pullRequest.reviews.edges[i].node.state);
            console.log("///////////////////////////////////////////////////////////");
        }
    }

    async calaculatePRCommentsCount(data){
        console.log("///////////////////////////////////////////////////////////");
        console.log("Le Nombre de Comment(s) dans le PR 22 est : " + data.data.repository.pullRequest.comments.edges.length);
        for(var i = 0; i<data.data.repository.pullRequest.comments.edges.length; i++){
            console.log("///////////////////////////////////////////////////////////");
            console.log("Les comment(s) : " +  data.data.repository.pullRequest.comments.edges[i].node.body);
            console.log("///////////////////////////////////////////////////////////");
        }
    }

    async calaculatePRCommitsCount(data){
        console.log("///////////////////////////////////////////////////////////");
        console.log("Le Nombre de Commit(s) dans le PR 22 est : " + data.data.repository.pullRequest.commits.edges.length);
        for(var i = 0; i<data.data.repository.pullRequest.commits.edges.length; i++){
            console.log("///////////////////////////////////////////////////////////");
            console.log("Les commits : " +  data.data.repository.pullRequest.commits.edges[i].node.commit.oid);
            console.log("///////////////////////////////////////////////////////////");
        }
    }

    async calaculatePRCommitsMes(data){
        var countMes = 0;
        for(var i = 0; i<data.data.repository.pullRequest.commits.edges.length; i++){
            console.log("///////////////////////////////////////////////////////////");
            console.log("Message numéro " + (i + 1) + ": " + data.data.repository.pullRequest.commits.edges[i].node.commit.message
             + " pour le commit: " +  data.data.repository.pullRequest.commits.edges[i].node.commit.oid);
             // do not count if the message is empty
            if (data.data.repository.pullRequest.commits.edges[i].node.commit.message.length != 0 ){
               countMes = countMes + 1; 
            }
        }
        console.log("///////////////////////////////////////////////////////////");
        console.log("Le Nombre de message(s) dans le PR 22 est : " + countMes);
        console.log("///////////////////////////////////////////////////////////");
    }

}

const calculate = new MetriquesPrCalculations();
export default calculate;
