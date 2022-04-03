import {Box} from 'reflexbox'
const { NEXT_PUBLIC_API_URL } = process.env;


function GenerateContent() {
    
    async function addContent() {
        let i
        for(i=0; i<10;i++){
        const postData = {
            Title: "Some title",
            Content: "add some content"
        }
        const generate = await fetch (`${NEXT_PUBLIC_API_URL}/api/posts`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data:postData})
        })
        const generateResponse = await generate.json()
        console.log("generatedRes", generateResponse)
    }
}
    return(
        <Box variant="container">
            <button onClick={addContent}>generate strapi content </button>
        </Box>
    )
}
export default GenerateContent