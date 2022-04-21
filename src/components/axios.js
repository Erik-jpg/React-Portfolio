import axios from 'axios';

const getInfo = async (url) => {
    try {
    const info = await axios
    .get('https://github.com/Erik-jpg?tab=repositories');
    
    } catch(error) {
    console.log(error);
    
}
return info.data;
};

const getGitHub = async () => {
    const repos = await axios.get('https://github.com/Erik-jpg?tab=repositories', {
        
    })
}

const technologies = {};
const techArray = 
