import axios from 'axios';
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});
api.interceptors.request.use(
    async config => {
        const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2IxNzYyYzk3YjQ0NjUxZDUyYmJlN2U3ZmM1MmYwOSIsInN1YiI6IjYwNTkzNTQ4NzBiNDQ0MDA1NDRiNDVmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6SOa8-zXVD74799SW2xDhDefAenXtIFmExtndSRDtW8"
        config.headers = {
            Authorization: `${token}`
        }
        return config;
    }
)

export default api;
