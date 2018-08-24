//Async/Await

async fetchData(query) =>
{
    try
    {
        const response = await axios.get(`/q?query=${query}`);
        const data = response.data;
        return data;
    }
    catch (error)
    {
        console.log(error)
    }
}
 
fetchData(query).then(data =>
{
    this.props.processfetchedData(data)
})


