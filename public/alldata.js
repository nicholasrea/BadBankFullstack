function AllData() {
  const [data, setData] = React.useState('')
  
  React.useEffect(() => {

    fetch('account/all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(JSON.stringify(data));
      });
  }, []);
  
  return(
    <>
      <h1>All Data</h1>
      <h5>{data}</h5>
    </>

  );
}