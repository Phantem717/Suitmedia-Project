async function fetchData() {
    try {
      const response = await fetch('https://suitmedia-backend.suitdev.com/api/ideas?page[number]=1&page[size]=10&append[]=small_image&append[]=medium_image&sort=-published_at',
        {
          method:'GET',
          headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    //   return data;

      

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();

