export const BACKEND_URL="https://tacforce.azurewebsites.net";
export const GET_MATCH_ENDPOINT=(matchId)=>{
    return {method:'get',url:`/matches/${matchId}`}
};
export const GET_AGENTS_ENDPOINT={method:'get',url:'/agents'};