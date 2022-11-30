import axios from 'axios';
const baseURL = 'https://youtube.googleapis.com/youtube/v3'

export async function search(keyword:string|undefined) {
        try {
            if(keyword) {
            const response = await axios
            .get(`${baseURL}/search?part=snippet&maxResults=25&q=${keyword}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            return response;       
            } else {
            const response = await axios
            .get(`${baseURL}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            return response;            
            }              
        } catch(err) {
            console.log(err);
            throw new Error("API Request Error:, error")
            }      
        }
